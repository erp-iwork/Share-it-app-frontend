import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductsComp from "./Products";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getLoading,
  getFilteredItems,
  loadFilteredItems,
} from "../../../store/items";

class PopularAmongUsers extends Component {
  componentDidMount() {
    this.props.loadFilterdItems({});
  }

  render() {
    return (
      <div className="popularAmongUsersContainer">
        <Row>
          {this.props.items.map((item) => (
            <Col key={item.itemId} md={2} sm={12} xs={12}>
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
  items: getFilteredItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilterdItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularAmongUsers);
