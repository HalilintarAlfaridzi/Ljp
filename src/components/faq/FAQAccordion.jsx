import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={item.question}>
            <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span>{item.question}</span>
              <ChevronDown className={isOpen ? "open" : ""} size={20} aria-hidden="true" />
            </button>
            {isOpen ? (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
