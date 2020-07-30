import React, { Component } from "react";
import {
  loadFilteredItemsBySubcategory,
  getFilteredItemsBySubcategory,
} from "../../../store/items";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductsComp from "../../homePage/components/Products";
import { Link } from "react-router-dom";

class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadFilteredItemsBySubcategory({
      sub_category: this.props.subcategoryId,
    });
  }
  render() {
    return (
      <div className="m-5">
        <Row>
          {this.props.items.map((item) => (
            <Col key={item.itemId} md={2} xs={12} sm={12}>
              <Link to={`/items/${item.itemId}`}>
                <ProductsComp item={item} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItemsBySubcategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilteredItemsBySubcategory: (options) =>
    dispatch(loadFilteredItemsBySubcategory(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
