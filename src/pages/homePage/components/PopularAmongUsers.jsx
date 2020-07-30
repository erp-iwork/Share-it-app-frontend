import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductsComp from "./Products";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLoading, getItems, loadItems } from "../../../store/items";

class PopularAmongUsers extends Component {
  componentDidMount() {
    this.props.loadItems();
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
  items: getItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: (options) => dispatch(loadItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularAmongUsers);
