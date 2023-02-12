import { useEffect, useRef, useState } from "react";

import { Typography } from "components/ui";

export const FaqItem = ({ info, onToggle, active }) => {
  const answerRef = useRef();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(answerRef.current.scrollHeight);
  }, [active]);

  return (
    <li className={active ? "faq__item faq__item--active" : "faq__item"}>
      <Typography tag="h3" variant="h4" className="faq__item-head" onClick={onToggle}>
        {info.question}
        <div className="faq__item-icon"></div>
      </Typography>
      <div ref={answerRef} className="faq__item-body" style={active ? { maxHeight: height } : { maxHeight: "0px" }}>
        {info.answer}
      </div>
    </li>
  );
};
