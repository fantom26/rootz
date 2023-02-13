import { useEffect, useState } from "react";

import { useSpring } from "@react-spring/web";
import { useLocation } from "react-router-dom";

import { Button, Container, Logo } from "components/ui";

import { useScrollLock, useTranslation } from "hooks";

import { detectBrowser } from "utils/helpers";

import { HamburgerMenu } from "./components/hamburger-menu";
import { MobileNav } from "./components/mobile-nav";
import { Nav } from "./components/nav";

const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175
};

export const Header = () => {
  const t = useTranslation();
  const { key } = useLocation();

  const { lockScroll, unlockScroll } = useScrollLock();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [styles, api] = useSpring(() => ({
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: `translate(-6px, ${["Firefox", "Safari"].includes(detectBrowser()) ? "-0.5px" : "0.5px"}) rotate(0deg)`,
    transformBottom: "translate(-6px, -10px) rotate(0deg)",
    widthTop: "22px",
    widthBottom: "22px",
    config: {
      mass: animationConfig.mass,
      friction: animationConfig.frictionHeavy,
      tension: animationConfig.tension
    }
  }));

  const toggleDrawer = (state) => {
    setDrawerIsOpen(state);
  };

  useEffect(() => {
    const { body } = document;

    if (drawerIsOpen) {
      lockScroll();
      body.querySelector(".header").classList.add("mobile-menu--active");
    } else {
      unlockScroll();
      body.querySelector(".header").classList.remove("mobile-menu--active");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerIsOpen]);

  useEffect(() => {
    setDrawerIsOpen(false);
  }, [key]);

  return (
    <>
      <MobileNav open={drawerIsOpen} />
      <header className="header">
        <Container>
          <div className="header-wrapper">
            <Logo />
            <Nav />
            <Button className="header__btn" color="ghost" size="middle" fontSize="16" uppercase={false} hashLink path="#login">
              {t.btn.apply}
            </Button>
            <HamburgerMenu open={drawerIsOpen} toggle={toggleDrawer} styles={styles} api={api} animationConfig={animationConfig} />
          </div>
        </Container>
      </header>
    </>
  );
};
