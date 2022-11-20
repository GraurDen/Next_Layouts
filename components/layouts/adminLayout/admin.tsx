import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>Test 1 with revert</div>
      <Header />
      {children}
    </div>
  );
};

export default AdminLayout;
