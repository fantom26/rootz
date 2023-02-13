import { animated, useTransition } from "@react-spring/web";
import { Link, useLocation } from "react-router-dom";

import { Drawer } from "components/common";
import { Button } from "components/ui";

import { useTranslation } from "hooks";

export const MobileNav = ({ open }) => {
  const t = useTranslation();
  const { pathname } = useLocation();

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    }
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) =>
    visible ? (
      <Drawer visible={open} className="mobile-menu">
        <animated.nav style={{ opacity }} className="mobile-menu-nav">
          <animated.ul className="mobile-menu-nav__list" style={{ transform: transformMain }}>
            {t.navigation.map((item) => (
              <li key={item.id}>
                <Link className={`header-nav__link ${pathname === item.url ? "active" : ""}`} to={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </animated.ul>
        </animated.nav>
        <animated.div style={{ transform: transformFoot }}>
          <Button className="mobile-menu__btn" color="ghost" fontSize="16" uppercase={false} hashLink path="#login">
            {t.btn.apply}
          </Button>
        </animated.div>
      </Drawer>
    ) : null
  );
};
