import { animated } from "@react-spring/web";

import { detectBrowser } from "utils/helpers";

export const HamburgerMenu = (props) => {
  const { open, toggle, api, styles, animationConfig } = props;

  const handleClick = () => {
    api.start({
      to: open
        ? [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true }
            },
            {
              transformTop: "translate(-6px, 10px) rotate(0deg)",
              transformMiddle: `translate(-6px, ${["Firefox", "Safari"].includes(detectBrowser()) ? "-0.5px" : "0.5px"}) rotate(0deg)`,
              transformBottom: "translate(-6px, -10px) rotate(0deg)",
              widthTop: "22px",
              widthBottom: "22px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension
              },
              delay: animationConfig.delay
            }
          ]
        : [
            {
              transformTop: "translate(-6px, 18.5px) rotate(0deg)",
              transformMiddle: "translate(-6px, 0px) rotate(0deg)",
              transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: { clamp: true }
            },
            {
              transformTop: "translate(-6px, 18.5px) rotate(45deg)",
              transformMiddle: `translate(${
                // eslint-disable-next-line no-nested-ternary
                ["Firefox"].includes(detectBrowser()) ? "-11px" : ["Safari"].includes(detectBrowser()) ? "-11.5px" : "-12px"
              }, 0px) rotate(45deg)`,
              transformBottom: "translate(-6px, -18.5px) rotate(-45deg)",
              widthTop: "28px",
              widthBottom: "28px",
              config: {
                clamp: false,
                friction: animationConfig.frictionLight,
                tension: animationConfig.tension
              },
              delay: animationConfig.delay
            }
          ]
    });
    toggle((prev) => !prev);
  };

  return (
    <button className="hamburger-menu" onClick={handleClick}>
      <animated.div style={{ transform: styles.transformTop, width: styles.widthTop }} className="hamburger-menu__line" />
      <animated.div style={{ transform: styles.transformMiddle }} className="hamburger-menu__line" />
      <animated.div
        style={{
          transform: styles.transformBottom,
          width: styles.widthBottom
        }}
        className="hamburger-menu__line"
      />
    </button>
  );
};
