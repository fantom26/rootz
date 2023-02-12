import { useTranslation } from "hooks";

import { ICONS } from "utils/constants";

export const Socials = () => {
  const t = useTranslation();

  return (
    <ul className="socials">
      {Object.entries(t.socials).map(([key, value]) => (
        <li key={key}>
          <a target="_blank" rel="noreferrer" href={value} aria-label={t.alts[key]}>
            {ICONS[key]}
          </a>
        </li>
      ))}
    </ul>
  );
};
