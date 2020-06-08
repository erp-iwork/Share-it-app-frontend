import { Content, Footer, Header } from ".";
import React from "react";

class MainLayout extends React.Component {
  UNSAFE_componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }


  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
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
