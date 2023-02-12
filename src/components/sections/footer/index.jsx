import { Socials } from "components/common";
import { Container, Typography } from "components/ui";

import { useTranslation } from "hooks";

export const Footer = () => {
  const t = useTranslation();

  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer__wrapper">
            <div className="footer__contacts">
              <Typography tag="h2" variant="h2">
                {t.footer.title}
              </Typography>
              <Typography tag="p" variant="paragraph2">
                {t.footer.contactsText}
              </Typography>
            </div>
            <div className="footer__inner">
              <div className="footer__headquarters">
                <Typography tag="h2" variant="h4">
                  {t.footer.headquartersTitle}
                </Typography>
                <Typography tag="p" variant="paragraph2">
                  {t.footer.headquartersText}
                </Typography>
              </div>
              <div className="footer__social">
                <Typography tag="h2" variant="h4">
                  {t.footer.socialTitle}
                </Typography>
                <Socials />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
