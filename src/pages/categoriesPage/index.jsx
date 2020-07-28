import React, { Component } from "react";
import SubCategoryCard from "./components/subCategoryCard";
// import Spacer from "./components/spacer";
import CategoryImageContainer from "./components/categoryImageContainer";
// import { Luggage } from "../../assets/newResources/Sharrit-Sub-CategoryImages";
import Mercedes2 from "../../assets/newResources/ProductSharing.jpg";

import { Spacer } from "../../components/Layout";
import { Row, Col } from "reactstrap";
import { getSelectedCategory, loadCategoryById } from "../../store/categories";
import {
  getSubcategoriesByCategoryId,
  loadSubcategoriesByCategoryId,
} from "../../store/subcategories";
import { connect } from "react-redux";

class index extends Component {
  state = {
    categoryId: null,
  };
  componentDidMount() {
    const categoryId = this.props.match.params.id;
    this.props.loadCategoryById(categoryId);
    this.props.loadSubcategoriesByCategoryId(categoryId);
  }

  componentDidUpdate() {
    const { categoryId: id } = this.state;
    const categoryId = this.props.match.params.id;
    if (categoryId !== id) {
      this.props.loadCategoryById(categoryId);
      this.props.loadSubcategoriesByCategoryId(categoryId);
      this.setState({ categoryId });
    }
  }

  render() {
    const { name: categoryName, description: categoryDescription } = this.props
      .selectedCategory
      ? this.props.selectedCategory
      : { name: "", description: "" };

    return (
      <div className="categoriesMainContainer">
        <CategoryImageContainer
          title={categoryName}
          description={categoryDescription}
          image={Mercedes2}
        />
        <Spacer title="Sub-Categories " />
        <Row className="m-2">
          {this.props.subcategories.map((subCategory) => (
            <Col md={2} xs={12} sm={12}>
              <SubCategoryCard subCategory={subCategory} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: getSelectedCategory(state),
  subcategories: getSubcategoriesByCategoryId(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategoryById: (id) => dispatch(loadCategoryById(id)),
  loadSubcategoriesByCategoryId: (categoryId) =>
    dispatch(loadSubcategoriesByCategoryId(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
