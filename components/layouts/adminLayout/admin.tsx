import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello world !!!</h1>
      <Header />
      {children}
    </div>
  );
};

export default AdminLayout;
