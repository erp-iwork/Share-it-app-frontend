import { Content, Footer, Header } from "./index";
import React from "react";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-background">
        <Content fluid>
          <Header />
          {children}
          <Footer />
        </Content>
      </main>
    );
  }
}

export default MainLayout;
