import { Button, Typography } from "components/ui";

import { useTranslation } from "hooks";

export const FaqInfo = () => {
  const t = useTranslation();

  return (
    <div className="faq__info">
      <Typography tag="h2" variant="h2">
        {t.pages.home.faq.title}
      </Typography>
      <Typography tag="p" className="section__text faq__text">
        {t.pages.home.faq.description}
      </Typography>
      <Button size="large" hashLink path="#login">{t.pages.home.faq.btn}</Button>
    </div>
  );
};
