import Header from "../../header/Header";
import { ReactElement } from "react";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      {/* All changes was removed */}
      <Header />
      {children}
    </>
  );
};

export default AdminLayout;
