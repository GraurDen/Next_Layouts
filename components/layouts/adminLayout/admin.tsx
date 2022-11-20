import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <h1>Changes afert REFLOG !!!</h1>
      {children}
    </>
  );
};

export default AdminLayout;
