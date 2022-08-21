import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AdminLayout;
