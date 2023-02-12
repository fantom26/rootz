import { Typography } from "components/ui";

import { useTranslation } from "hooks";

export const LoginInfo = () => {
  const t = useTranslation();

  return (
    <div className="login__info">
      <Typography tag="h2" variant="h2">
        {t.pages.home.login.title}
      </Typography>
      <Typography className="login__text" tag="p">
        {t.pages.home.login.text}
      </Typography>
    </div>
  );
};
