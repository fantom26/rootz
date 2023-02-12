import { useState } from "react";

import { useTranslation } from "hooks";

import { FaqItem } from "./faq-item";

export const FaqList = () => {
  const [clicked, setClicked] = useState(0);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("");
    }
    setClicked(index);
  };

  const t = useTranslation();

  return (
    <ul className="faq__list">
      {t.pages.home.faq.items.map((item, index) => (
        <FaqItem key={item.id} info={item} active={clicked === index} onToggle={() => handleToggle(index)} />
      ))}
    </ul>
  );
};
