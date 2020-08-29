import React from "react";
import { Navbar, Nav, NavItem, Card, Row, CardBody, Col } from "reactstrap";
import SharreitWhite from "../../assets/Icons/SharreitWhite.svg";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import MobileStoreButton from "react-mobile-store-button";

const Footer = () => {
  return (
    <Card className="footerContainer bg-gradient-theme-all border-0">
      <CardBody className="footerContents">
        <Row>
          <Col>
            <Navbar>
              <Nav navbar color="primary">
                <img className="footerIcon" src={SharreitWhite} alt="" />
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Nav navbar>
                <NavItem className="footerTexts">
                  <b>About</b>
                </NavItem>
                <Link to={{ pathname: routes.aboutUs }}>
                  <NavItem className="footerTexts">About Us </NavItem>
                </Link>
                <Link to={{ pathname: routes.howSharreitWorks }}>
                  <NavItem className="footerTexts">How Sharreit Works </NavItem>
                </Link>{" "}
                <Link to={{ pathname: routes.security }}>
                  <NavItem className="footerTexts">Security </NavItem>
                </Link>{" "}
                <Link to={{ pathname: routes.guarentee }}>
                  <NavItem className="footerTexts">Guarantee </NavItem>
                </Link>{" "}
                <Link to={{ pathname: routes.homePage }}>
                  <NavItem className="footerTexts">Browse Sharreit </NavItem>
                </Link>{" "}
                <Link to={{ pathname: routes.FAQ }}>
                  <NavItem className="footerTexts">FAQ </NavItem>
                </Link>{" "}
                <Link to={{ pathname: routes.termsAndConditions }}>
                  <NavItem className="footerTexts">Terms Of Service </NavItem>
                </Link>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Nav navbar color="primary">
                <NavItem className="footerTexts">
                  <b>Account</b>
                </NavItem>
                <Link to={{ pathname: routes.login }}>
                  <NavItem className="footerTexts">Login </NavItem>
                </Link>
                <Link to={{ pathname: routes.registration }}>
                  <NavItem className="footerTexts">Sign up </NavItem>
                </Link>{" "}
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Nav navbar color="primary">
                <NavItem className="footerTexts">
                  <b>Get The App</b>
                </NavItem>
                <NavItem className="footerTexts">
                  <MobileStoreButton
                    store="android"
                    width={150}
                    // url={iOSUrl}
                    // linkProps={{ title: "iOS Store Button" }}
                  />
                </NavItem>
                <NavItem className="footerTexts">
                  <MobileStoreButton
                    store="ios"
                    width={150}
                    // url={androidUrl}
                    // linkProps={{ title: "Android Store Button" }}
                  />
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </CardBody>
      <hr className="divider" />
      <Col md={12} sm={12} xs={12}>
        <NavItem className="footerTexts">2020, Sharreit Web</NavItem>
      </Col>
    </Card>
  );
};

export default Footer;
