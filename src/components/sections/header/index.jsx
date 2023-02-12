import { useEffect, useState } from "react";

import { useSpring } from "@react-spring/web";

import { Button, Container, Logo } from "components/ui";

import { useScrollLock, useTranslation } from "hooks";

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

  const { lockScroll, unlockScroll } = useScrollLock();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [styles, api] = useSpring(() => ({
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
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
      body.querySelector(".header").classList.add("burger--active");
    } else {
      unlockScroll();
      body.querySelector(".header").classList.remove("burger--active");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerIsOpen]);

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
