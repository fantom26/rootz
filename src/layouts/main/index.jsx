import { Outlet } from "react-router-dom";

import { Footer, Header } from "components/sections";

export const MainLayout = () => (
  <div className="wrapper">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
