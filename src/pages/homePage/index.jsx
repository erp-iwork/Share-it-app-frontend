import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import SubHeader from "../../components/Layout/SubHeader";
import Item from "./components/item";
import { loadItems, getItems } from "../../store/items";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
              <Item
                title={item.title}
                boost={item.boost}
                price={item.price}
                image={item.item_images[0].image}
              />
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
