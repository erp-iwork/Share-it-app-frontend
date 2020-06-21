import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import SubHeader from "../../components/Layout/SubHeader";
import Item from "./components/item";
import { loadItems, getItems } from "../../store/items";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadItems();
  }
  render() {
    return (
      <div className="BackContainer">
        <SubHeader />
        <Row>
          {this.props.items.map((item) => (
            <Col key={item.itemId} md={3} sm={12} xs={12}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: getItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
