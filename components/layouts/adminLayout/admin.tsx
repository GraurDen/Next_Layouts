import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Test 1 with revert</h1>
      <h1>Test 2 with revert</h1>
      <Header />
      {children}
    </div>
  );
};

export default AdminLayout;
