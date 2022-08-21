import { ReactElement } from "react";
import MainLayout from "../../components/layouts/main/main";

const MainPage = () => {
  return <div>Main Page</div>;
};

MainPage.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default MainPage;
