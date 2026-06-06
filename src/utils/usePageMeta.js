import { useEffect } from "react";
import { defaultSeo, siteUrl } from "../constants/seo";

function ensureMeta(selector, createAttributes) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  return element;
}

function setMeta(name, content) {
  if (!content) return;
  ensureMeta(`meta[name="${name}"]`, { name }).setAttribute("content", content);
}

function setProperty(property, content) {
  if (!content) return;
  ensureMeta(`meta[property="${property}"]`, { property }).setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function setJsonLd(id, data) {
  const existing = document.querySelector(`script[data-seo-json="${id}"]`);

  if (!data) {
    existing?.remove();
    return;
  }

  const element = existing || document.createElement("script");
  element.setAttribute("type", "application/ld+json");
  element.setAttribute("data-seo-json", id);
  element.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(element);
  }
}

function getCanonicalUrl(path = window.location.pathname) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteUrl}${normalizedPath}`;
}

export function usePageMeta(title, description, options = {}) {
  useEffect(() => {
    const pageTitle = title || defaultSeo.title;
    const pageDescription = description || defaultSeo.description;
    const canonicalUrl = getCanonicalUrl(options.path);
    const image = options.image || defaultSeo.image;
    const keywords = options.keywords || defaultSeo.keywords;

    document.title = pageTitle;

    setMeta("description", pageDescription);
    setMeta("keywords", keywords.join(", "));
    setMeta("robots", options.robots || "index, follow, max-image-preview:large");
    setMeta("googlebot", options.robots || "index, follow, max-image-preview:large");
    setMeta("author", "LJP Custom Furniture");
    setMeta("geo.region", "ID-JT");
    setMeta("geo.placename", "Magelang, Jawa Tengah");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", image);

    setProperty("og:type", options.type || "website");
    setProperty("og:locale", "id_ID");
    setProperty("og:site_name", "LJP Custom Furniture");
    setProperty("og:title", pageTitle);
    setProperty("og:description", pageDescription);
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", image);

    setLink("canonical", canonicalUrl);
    setJsonLd("page", options.structuredData);
  }, [title, description, options]);
}
