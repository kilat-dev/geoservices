import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";
import { ComponentType } from "react";

export type PageType = NextPage & {
  layout?: ComponentType<any>;
};

export type ModuleType = NextComponentType<NextPageContext, any, {}> & {
  layout?: ComponentType<any>;
};

export type MyAppProps = AppProps & {
  Component: ModuleType;
};
