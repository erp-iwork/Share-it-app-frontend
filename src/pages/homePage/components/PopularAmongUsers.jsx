import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductsComp from "./Products";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadTopItems,
  getTopSharedItems,
  getTopDonatedItems,
} from "../../../store/topItems";

class PopularAmongUsers extends Component {
  componentDidMount() {
    this.props.loadTopItems();
  }

  render() {
    return (
      <div className="popularAmongUsersContainer">
        <Row>
          {this.props.topSharedItems.map((item) => (
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
  topSharedItems: getTopSharedItems(state),
  topDonatedItems: getTopDonatedItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadTopItems: () => dispatch(loadTopItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularAmongUsers);
