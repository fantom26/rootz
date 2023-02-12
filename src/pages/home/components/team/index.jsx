import { useSpring } from "@react-spring/web";

import { Container, Typography } from "components/ui";

import { useTranslation } from "hooks";

import { Members } from "./components/members";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

export const Team = () => {
  const t = useTranslation();
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  return (
    <section className="team pd-b190" id="team" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Container>
        <Typography tag="h2" variant="h2" center>
          {t.pages.home.team.title}
        </Typography>
        <Typography className="team__text" tag="p" center>
          {t.pages.home.team.text}
        </Typography>
        <Members transform={props} />
      </Container>
    </section>
  );
};
