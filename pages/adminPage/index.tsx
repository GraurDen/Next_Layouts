import { ReactElement } from "react";
import AdminLayout from "../../components/layouts/adminLayout/admin";

const AdminPage = () => {
  return <div>Admin page</div>;
};

AdminPage.getLayout = function (page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
