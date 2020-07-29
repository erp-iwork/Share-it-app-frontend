import React from "react";
import { Col, Row, Button, Input, Jumbotron } from "reactstrap";

const AllItemsImageContainer = ({ title, description, image }) => {
  return (
    <Jumbotron
      className="containerSize"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Col md={12} sm={12} xs={12} className="allItemsImageContainer">
        <div className="titleCategory mb-4">{title}</div>
        <Row>
          <Col md={11}>
            <Input
              placeholder="Search Sharreit ..."
              className="searchInputCategory"
            />
          </Col>
          <Col md={1}>
            <Button outline color="light" className="CategorySearchButton">
              SEARCH
            </Button>
          </Col>
        </Row>
      </Col>
    </Jumbotron>
  );
};

export default AllItemsImageContainer;
