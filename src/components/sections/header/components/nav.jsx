import { Link, useLocation } from "react-router-dom";

import { useTranslation } from "hooks";

export const Nav = () => {
  const { pathname } = useLocation();
  const t = useTranslation();

  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        {t.navigation.map((item) => (
          <li key={item.id}>
            <Link className={`header-nav__link ${pathname === item.url ? "active" : ""}`} to={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
