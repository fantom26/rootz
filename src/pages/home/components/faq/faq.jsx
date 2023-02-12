import { Container } from "components/ui";

import { FaqList } from "./components/faq-list";
import { FaqInfo } from "./components/faq-info";

export const Faq = () => (
  <section className="faq pd-t190 pd-b190" id="faq">
    <Container>
      <div className="faq__wrapper">
        <FaqInfo />
        <FaqList />
      </div>
    </Container>
  </section>
);
