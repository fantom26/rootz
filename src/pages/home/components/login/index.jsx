import { Container } from "components/ui";

import { LoginForm } from "./components/login-form";
import { LoginInfo } from "./components/login-info";

export const Login = () => (
  <section className="login" id="login">
    <Container>
      <div className="login__wrapper">
        <LoginInfo />
        <LoginForm />
      </div>
    </Container>
  </section>
);
