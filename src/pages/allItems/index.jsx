import React, { Component } from "react";
import MainBodyPage from "./components/mainBody";
// import FilterComponent from "./components/filterComp";
// import { Col } from "reactstrap";
import AllItemsImageContainer from "./components/allItemsImageContainer";
// import { Luggage } from "../../assets/newResources/Sharrit-Sub-CategoryImages";
import { Spacer } from "../../components/Layout";
import { connect } from "react-redux";
import {
  loadSubcategoryById,
  getSelectedSubcategory,
} from "../../store/subcategories";

class AllItems extends Component {
  constructor(props) {
    super(props);
    console.log("here works");
    this.props.loadSubcategoryById(this.props.match.params.subcategoryId);
  }

  render() {
    const { subcategory } = this.props;
    return (
      <div className="allItemsContainer">
        <AllItemsImageContainer
          title={subcategory && subcategory.name}
          description=""
          image={subcategory && subcategory.icon}
        />
        <Spacer title={subcategory && subcategory.name} />
        <MainBodyPage subcategoryId={this.props.match.params.subcategoryId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subcategory: getSelectedSubcategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadSubcategoryById: (id) => dispatch(loadSubcategoryById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);
