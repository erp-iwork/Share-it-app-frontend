import React from "react";
import { Col, Row, Button, Input, Jumbotron } from "reactstrap";
// import { Mercedes1 } from "../../../assets/demoImages/index";

const CategoryImageContainer = ({ title }) => {
  return (
    <Jumbotron
      className="containerSize"
      // style={{ backgroundImage: `url(${Mercedes1})` }}
    >
      <div>
        <Row>
          <h2>{ title }</h2>
          <Input
            placeholder="Search Sharreit ..."
            className="searchInputHome"
          />
          <Col sm="12">
            <Button className="buttonPaddingRight">SEARCH</Button>
            <b>
              <i>OR</i>
            </b>
            <Button outline className="buttonPaddingLeft" color="success">
              START SHARING
            </Button>
          </Col>
        </Row>
      </div>

      {/* <Row>
        <h2>
          <b> {title}</b>
        </h2>
        <Col>
          <Button outline color="light">
            searched item{" "}
          </Button>

          <Button outline color="light">
            searched item
          </Button>

          <Button outline color="light">
            searched item
          </Button>

          <Button outline color="light">
            searched item
          </Button>

          <Button outline color="light">
            searched item
          </Button>
        </Col>
      </Row> */}
    </Jumbotron>
  );
};

export default CategoryImageContainer;
