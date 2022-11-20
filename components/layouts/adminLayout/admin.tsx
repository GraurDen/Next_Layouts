import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <h1 style={{ color: "greenyellow" }}>The commit i'm going back to</h1>
      {children}
    </>
  );
};

export default AdminLayout;
