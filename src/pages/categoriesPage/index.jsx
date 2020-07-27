import React, { Component } from "react";
import SubCategoryCard from "./components/subCategoryCard";
// import Spacer from "./components/spacer";
import CategoryImageContainer from "./components/categoryImageContainer";
import { Luggage } from "../../assets/newResources/Sharrit-Sub-CategoryImages";

import { Spacer } from "../../components/Layout";
import { Row, Col } from "reactstrap";
//load items by subcategory and display

class index extends Component {
  render() {


    return (
      <div className="categoriesMainContainer">
        <CategoryImageContainer
          title="Electronics"
          description="Electronic devices are components for controlling 
          the flow of electrical currents for the purpose of 
          information processing and system control. Prominent 
          examples include transistors and diodes. Electronic devices 
          are usually small and can be grouped together into packages called 
          integrated circuits.
        "
          image={Luggage}
        />
        <Spacer title="Sub-Categories " />
        <Row className="m-2">
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <SubCategoryCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
