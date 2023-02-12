import { animated } from "@react-spring/web";

import { useTranslation } from "hooks";

export const Members = ({ transform }) => {
  const t = useTranslation();

  return (
    <ul className="team__list">
      {t.pages.home.team.members.map((member) => (
        <li key={member.id} className="team__item">
          <animated.picture style={{ transform: transform.xy.to(member.trans) }}>
            <source srcSet={`/img/team/img${member.id}@1x.avif 1x, /img/team/img${member.id}@2x.avif 2x`} type="image/avif" />
            <source srcSet={`/img/team/img${member.id}@1x.webp 1x, /img/team/img${member.id}@2x.webp 2x`} type="image/webp" />
            <img
              src={`/img/team/img${member.id}@1x.png`}
              srcSet={`/img/team/img${member.id}@2x.png 2x`}
              width="340"
              height="320"
              alt={`Portrait of ${member.name}`}
              loading="lazy"
            />
          </animated.picture>
        </li>
      ))}
    </ul>
  );
};
