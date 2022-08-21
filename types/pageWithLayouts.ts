import { NextPage } from "next";
import type { ReactElement } from "react";
import AdminLayout from "../components/layouts/adminLayout/admin";
import MainLayout from "../components/layouts/main/main";

export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout };
export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithLayoutType =
  | PageWithAdminLayoutType
  | PageWithMainLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
