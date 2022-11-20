import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>Changes afert REFLOG !!!</h1>
      {children}
    </div>
  );
};

export default AdminLayout;
