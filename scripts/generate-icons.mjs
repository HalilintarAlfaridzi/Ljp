import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const colors = {
  bg: [59, 38, 24, 255],
  border: [200, 145, 77, 255],
  fg: [248, 243, 234, 255]
};

function crc32(bytes) {
  let crc = -1;
  for (const byte of bytes) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type);
  const payload = Buffer.concat([typeBytes, data]);
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  typeBytes.copy(out, 4);
  data.copy(out, 8);
  out.writeUInt32BE(crc32(payload), 8 + data.length);
  return out;
}

function insideRoundRect(x, y, left, top, width, height, radius) {
  const right = left + width;
  const bottom = top + height;
  const cx = Math.max(left + radius, Math.min(x, right - radius));
  const cy = Math.max(top + radius, Math.min(y, bottom - radius));
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

const glyphs = [
  [
    "10000",
    "10000",
    "10000",
    "10000",
    "10000",
    "10000",
    "11111"
  ],
  [
    "11111",
    "00100",
    "00100",
    "00100",
    "00100",
    "10100",
    "11100"
  ],
  [
    "11110",
    "10001",
    "10001",
    "11110",
    "10000",
    "10000",
    "10000"
  ]
];

const glyphLayout = {
  x: 28,
  y: 53,
  cellWidth: 8,
  cellHeight: 12,
  gap: 8,
  radius: 2
};

function letterRects() {
  const rects = [];
  const { x, y, cellWidth, cellHeight, gap, radius } = glyphLayout;

  glyphs.forEach((glyph, letterIndex) => {
    const letterX = x + letterIndex * (5 * cellWidth + gap);
    glyph.forEach((row, rowIndex) => {
      [...row].forEach((cell, columnIndex) => {
        if (cell === "1") {
          rects.push({
            x: letterX + columnIndex * cellWidth,
            y: y + rowIndex * cellHeight,
            width: cellWidth,
            height: cellHeight,
            radius
          });
        }
      });
    });
  });

  return rects;
}

const letterCells = letterRects();

function sampleIcon(x, y, size) {
  const scale = size / 192;
  const unitX = x / scale;
  const unitY = y / scale;

  if (!insideRoundRect(unitX, unitY, 0, 0, 192, 192, 42)) {
    return [0, 0, 0, 0];
  }

  let color = colors.bg;
  const outer = insideRoundRect(unitX, unitY, 11, 11, 170, 170, 35);
  const inner = insideRoundRect(unitX, unitY, 21, 21, 150, 150, 25);
  if (outer && !inner) {
    color = colors.border;
  }

  const onLetter = letterCells.some((rect) => {
    return insideRoundRect(unitX, unitY, rect.x, rect.y, rect.width, rect.height, rect.radius);
  });

  return onLetter ? colors.fg : color;
}

function svgIcon() {
  const cells = letterCells
    .map((rect) => {
      return `    <rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}" rx="${rect.radius}"/>`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" role="img" aria-label="LJP">
  <rect width="192" height="192" rx="42" fill="#3b2618"/>
  <rect x="11" y="11" width="170" height="170" rx="35" fill="none" stroke="#c8914d" stroke-width="10"/>
  <g fill="#f8f3ea">
${cells}
  </g>
</svg>
`;
}

function renderRgba(size) {
  const samples = 4;
  const pixels = Buffer.alloc(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const acc = [0, 0, 0, 0];
      for (let sy = 0; sy < samples; sy += 1) {
        for (let sx = 0; sx < samples; sx += 1) {
          const color = sampleIcon(x + (sx + 0.5) / samples, y + (sy + 0.5) / samples, size);
          for (let i = 0; i < 4; i += 1) acc[i] += color[i];
        }
      }
      const offset = (y * size + x) * 4;
      for (let i = 0; i < 4; i += 1) {
        pixels[offset + i] = Math.round(acc[i] / (samples * samples));
      }
    }
  }

  return pixels;
}

function pngFromRgba(size) {
  const rgba = renderRgba(size);
  const scanlines = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y += 1) {
    const row = y * (size * 4 + 1);
    scanlines[row] = 0;
    rgba.copy(scanlines, row + 1, y * size * 4, (y + 1) * size * 4);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(scanlines)),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

function icoImage(size) {
  const rgba = renderRgba(size);
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0);
  header.writeInt32LE(size, 4);
  header.writeInt32LE(size * 2, 8);
  header.writeUInt16LE(1, 12);
  header.writeUInt16LE(32, 14);
  header.writeUInt32LE(0, 16);
  header.writeUInt32LE(size * size * 4, 20);

  const bgra = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const src = (y * size + x) * 4;
      const dst = ((size - 1 - y) * size + x) * 4;
      bgra[dst] = rgba[src + 2];
      bgra[dst + 1] = rgba[src + 1];
      bgra[dst + 2] = rgba[src];
      bgra[dst + 3] = rgba[src + 3];
    }
  }

  return Buffer.concat([header, bgra, Buffer.alloc(Math.ceil((size * size) / 8))]);
}

function writeIco(path, sizes) {
  const images = sizes.map(icoImage);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);

  const entries = Buffer.alloc(sizes.length * 16);
  let offset = 6 + entries.length;
  sizes.forEach((size, index) => {
    const entry = index * 16;
    entries[entry] = size;
    entries[entry + 1] = size;
    entries[entry + 2] = 0;
    entries[entry + 3] = 0;
    entries.writeUInt16LE(1, entry + 4);
    entries.writeUInt16LE(32, entry + 6);
    entries.writeUInt32LE(images[index].length, entry + 8);
    entries.writeUInt32LE(offset, entry + 12);
    offset += images[index].length;
  });

  writeFileSync(path, Buffer.concat([header, entries, ...images]));
}

writeFileSync("public/favicon.svg", svgIcon());
writeFileSync("public/icon-192.png", pngFromRgba(192));
writeFileSync("public/icon-512.png", pngFromRgba(512));
writeFileSync("public/apple-touch-icon.png", pngFromRgba(180));
writeIco("public/favicon.ico", [16, 32, 48]);
