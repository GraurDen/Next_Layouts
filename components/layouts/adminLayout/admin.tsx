import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>Состояние после Hard Reset</div>
      <Header />
      {children}
    </div>
  );
};

export default AdminLayout;
