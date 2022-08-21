import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
