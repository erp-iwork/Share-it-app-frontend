import React from "react";
import { Card, Col, Row, Button } from "reactstrap";
import routes from "../../config/routes";
import { Link } from "react-router-dom";

class SubHeader extends React.Component {
  render() {
    return (
      <Card className="mainPadding" align="center">
        <Row>
          <Col md={3} xs={12} sm={6}>
            <Link
              to={{
                pathname: routes.categories,
                type: 0,
              }}
            >
              <Button outline block>
                Product Sharing
              </Button>
            </Link>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Link to={{ pathname: routes.categories, type: 1 }}>
              <Button outline block>
                Service Sharing
              </Button>
            </Link>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Link to={{ pathname: routes.categories, type: 2 }}>
              <Button outline block>
                Digital Sharing
              </Button>
            </Link>
          </Col>
          <Col md={3} xs={12} sm={6}>
            <Button onClick={() => alert("Digoma")} block color="success">
              Donations
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SubHeader;
