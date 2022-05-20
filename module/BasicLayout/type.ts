import { BreadcrumbProps } from "reusables/types";

export interface BasicLayoutProps {
  children: JSX.Element;
}

export interface OilAndGasLayoutProps {
  children: JSX.Element;
  backgroundImage: string;
  text: string;
  breadcrumb: BreadcrumbProps;
}
