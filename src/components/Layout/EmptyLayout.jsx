import React from "react";
import { Content, EmptyLayoutHeader } from "./index";

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-background" {...restProps}>
    <Content fluid>
      <EmptyLayoutHeader />
      {children}
    </Content>
  </main>
);

export default EmptyLayout;
