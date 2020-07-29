import React from "react";
import { Col, Row, Button, Input, Jumbotron } from "reactstrap";

const CategoryImageContainer = ({ title, description, image }) => {
  return (
    <Jumbotron
      className="containerSize"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Col md={12} sm={12} xs={12}>
        <div className="titleCategory">{title} Sharing</div>
        <Col md={6} className="titleDescription">
          {description}
        </Col>
        <Row>
          <Col md={11}>
            <Input
              placeholder="Search Sharreit ..."
              className="searchInputCategory"
            />
          </Col>
          <Col md={1}>
            <Button outline className="CategorySearchButton">
              SEARCH
            </Button>
          </Col>
        </Row>
      </Col>

      <Col>
        <Col className="mostSearchesTitle">Most Searches ...</Col>

        <Button className="p-3 m-1 mostSearches" color="light">
          <b>Bull-Dozers</b>
        </Button>

        <Button className="p-3 m-1 mostSearches" color="light">
          <b>Drones</b>
        </Button>

        <Button className="p-3 m-1 mostSearches" color="light">
          <b>Nanny</b>
        </Button>

        <Button className="p-3 m-1 mostSearches" color="light">
          <b>Mercedes C-200</b>
        </Button>
      </Col>
    </Jumbotron>
  );
};

export default CategoryImageContainer;
