import { Content, Footer, Header } from "./index";
import React from "react";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        <Content fluid>
          <div className="appbarHeader">
            <Header />
          </div>
          {children}
          <Footer />
        </Content>
      </main>
    );
  }
}

export default MainLayout;
