import React from "react";
import { Card, Col, Row, Button } from "reactstrap";

class SubHeader extends React.Component {
  render() {
    return (
      <Card className="mainPadding" align="center">
        <Row>
          <Col md={3} xs={12} sm={6}>
            <Button outline block>
              Product Sharing
            </Button>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Button outline block>
              Service Sharing
            </Button>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Button outline block>
              Digital Sharing
            </Button>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Button block color="success">
              Donations
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SubHeader;
