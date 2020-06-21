import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import SubHeader from "../../components/Layout/SubHeader";
import Item from "./components/item";
import { loadItems, getItems, getLoading } from "../../store/items";
import { connect } from "react-redux";
import PageSpinner from "../../components/PageSpinner";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadItems();
  }
  render() {
    return (
      <div className="BackContainer">
        <SubHeader />
        {this.props.loading && <PageSpinner />}
        {this.props.items && (
          <Row>
            {this.props.items.map((item) => (
              <Col key={item.itemId} md={3} sm={12} xs={12}>
                <Item item={item} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: getItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
