import { Content } from './index';
import React from 'react';

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-background" {...restProps}>
    <Content fluid>{children}</Content>
  </main>
);

export default EmptyLayout;
