import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1 style={{ color: "greenyellow" }}>The commit i'm going back to</h1>
      <h2 style={{ color: "burlywood" }}>Test change that will be revert</h2>
      <h3 style={{ color: "blueviolet" }}>
        Test with secont change that will be revert to
      </h3>
      {children}
    </div>
  );
};

export default AdminLayout;
