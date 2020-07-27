import React, { Component } from "react";
import MainBodyPage from "./components/mainBody";
// import FilterComponent from "./components/filterComp";
import { Col } from "reactstrap";
import AllItemsImageContainer from "./components/allItemsImageContainer";
import { Luggage } from "../../assets/newResources/Sharrit-Sub-CategoryImages";
import { Spacer } from "../../components/Layout";

class AllItems extends Component {
  render() {
    return (
      <div className="allItemsContainer">
        <AllItemsImageContainer
          title="Sub-Category Name"
          description="sakdjlaskdjlask 
        sakdjlaskdjlasksakdjlaskdjlasksakdjlaskdjlask sakdjlaskdjlask 
        sakdjlaskdjlasksakdjlaskdjlasksakdjlaskdjlask sakdjlaskdjlask 
        sakdjlaskdjlasksakdjlaskdjlasksakdjlaskdjlask"
          image={Luggage}
        />
        <Spacer title="Sub-Category Name" />
        <MainBodyPage subcategoryId={this.props.match.params.subcategoryId} />
      </div>
    );
  }
}

export default AllItems;
