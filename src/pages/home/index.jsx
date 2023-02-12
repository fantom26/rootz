import { Faq } from "./components/faq/faq";
import { Hero } from "./components/hero";
import { Login } from "./components/login";
import { Saves } from "./components/saves";
import { Team } from "./components/team";

export const Home = () => (
  <>
    <Hero />
    <Team />
    <Login />
    <Faq />
    <Saves />
  </>
);
