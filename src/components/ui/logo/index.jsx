import { Link } from "react-router-dom";

import { useTranslation } from "hooks";

import { ICONS } from "utils/constants";

export const Logo = () => {
  const t = useTranslation();

  return (
    <div className="logo">
      <Link to="/" aria-label={t.alts.goToMain}>
        {ICONS.logo}
      </Link>
    </div>
  );
};
