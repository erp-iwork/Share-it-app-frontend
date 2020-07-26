import React from "react";
import { Navbar, Nav, NavItem, Card, Row, CardBody, Col } from "reactstrap";
import SharreitWhite from "../../assets/Icons/SharreitWhite.svg";

const Footer = () => {
  return (
    <Card className="footerContainer bg-gradient-theme-top border-0">
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
              <Nav navbar color="primary">
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Nav navbar color="primary">
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
              </Nav>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Nav navbar color="primary">
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
                <NavItem>2020, SharreIt App </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Footer;
