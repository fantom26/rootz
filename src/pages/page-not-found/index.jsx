import { Button, Container, Typography } from "components/ui";

import { useTranslation } from "hooks";

export const PageNotFound = () => {
  const t = useTranslation();
  return (
    <div className="wrapper">
      <main className="page-not-found ">
        <Container>
          <div className="page-not-found__img">
            <img src="img/notFound/404.svg" width="1452" height="565" alt="404 Page" loading="lazy" />
          </div>
          <Typography tag="h1" variant="h2" className="page-not-found__title" center>
            {t.pages.pageNotFound.title}
          </Typography>
          <Button className="page-not-found__btn" path="/" size="large" hashLink>
            {t.btn.goToMain}
          </Button>
        </Container>
      </main>
    </div>
  );
};
