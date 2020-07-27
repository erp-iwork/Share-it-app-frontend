import { Content, Footer, Header, SubHeader } from "./index";
import React from "react";
import FloatingActionButton from "./FloatingActionButton";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
      scrolled: false,
    };
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop;
    if (scrollTop > 160) {
      this.setState({
        scrolled: true,
      });
    }
    if (scrollTop < 160) {
      this.setState({
        scrolled: false,
      });
    }
    this.setState({
      scrollTop: scrollTop,
    });
  };

  render() {
    const { children } = this.props;
    const { scrolled } = this.state;
    return (
      <div
        style={{
          height: "100vh",
          overflow: "scroll",
        }}
        onScroll={this.onScroll}
        ref={this.myRef}
      >
        <main className="cr-app bg-background">
          <Content fluid>
            <Header />
            <SubHeader />
            {scrolled && <FloatingActionButton />}
            {children}
            <div className="mt-5">
              <Footer />
            </div>
          </Content>
        </main>
      </div>
    );
  }
}

export default MainLayout;
