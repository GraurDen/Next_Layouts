import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <h1 style={{ color: "greenyellow" }}>The commit i'm going back to</h1>
      <h2 style={{ color: "bisque" }}>Test change that will be revert</h2>
      {children}
    </>
  );
};

export default AdminLayout;
