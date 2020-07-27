import React from "react";
import { Navbar, Nav, NavItem, Card, Row, CardBody, Col } from "reactstrap";
import SharreitWhite from "../../assets/Icons/SharreitWhite.svg";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

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
                <Link>
                  <NavItem className="footerTexts">About Us </NavItem>
                </Link>
                <Link>
                  <NavItem className="footerTexts">How Sharreit Works </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">Security </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">Guarantee </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">Browse Sharreit </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">FAQ </NavItem>
                </Link>{" "}
                <Link>
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
                <Link>
                  <NavItem className="footerTexts">2020, SharreIt App </NavItem>
                </Link>
                <Link>
                  <NavItem className="footerTexts">2020, SharreIt App </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">2020, SharreIt App </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">2020, SharreIt App </NavItem>
                </Link>{" "}
                <Link>
                  <NavItem className="footerTexts">2020, SharreIt App </NavItem>
                </Link>
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
