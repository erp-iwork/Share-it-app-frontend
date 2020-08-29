import React, { Component } from "react";
import { Col, Row, CardBody, Button } from "reactstrap";
import Electronics from "../../../assets/newResources/Electronics.png";
import StorageSpaces from "../../../assets/newResources/StorageSpaces.png";

class PopularCategories extends Component {
  state = {};
  render() {
    return (
      <div className="popularCategoriesContainer">
        <Col className="popularCategoriesSingleContainer">
          <Row>
            <Col md={6} xs={12} sm={12}>
              <img
                className="popularCategoriesImage"
                src={Electronics}
                alt=""
              />
            </Col>
            <Col
              align="center"
              md={6}
              xs={12}
              sm={12}
              className="popularCategoriesDescription"
            >
              <h1 className="spacerTitle">ELECTRONICS</h1>
              <CardBody>
                <h5>
                  Electronic devices are components for controlling the flow of
                  electrical currents for the purpose of information processing
                  and system control. Prominent examples include transistors and
                  diodes. Electronic devices are usually small and can be
                  grouped together into packages called integrated circuits.
                </h5>
                <Button outline size="md">
                  EXPLORE MORE
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Col>
        <div className="mainspacer" />
        <Col>
          <Row>
            <Col
              align="center"
              md={6}
              xs={12}
              sm={12}
              className="popularCategoriesDescription"
            >
              <h1 className="spacerTitle">Storage Spaces</h1>
              <CardBody>
                <h5>
                  Storage Spaces is a technology in Windows and Windows Server
                  that can help protect your data from drive failures. ... You
                  can use Storage Spaces to group three or more drives together
                  into a storage pool and then use capacity from that pool to
                  create Storage Spaces.May 22, 2018
                </h5>
                <Button outline size="md">
                  EXPLORE MORE
                </Button>
              </CardBody>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <img
                className="popularCategoriesImage"
                src={StorageSpaces}
                alt=""
              />
            </Col>
          </Row>
        </Col>
        <div className="mainspacer" />

        {/* <Col align="right">
          <Button outline>See all categories</Button>
        </Col> */}
      </div>
    );
  }
}

export default PopularCategories;
