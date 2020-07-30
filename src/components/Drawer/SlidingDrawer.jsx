import React from "react";
import FilterComp from "../../pages/allItems/components/filterComp";
import { ProductsComp } from "../../pages/homePage/components";
import { Row, Col } from "reactstrap";
import { getFilteredItems } from "../../store/items";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SlidingDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <div className={drawerClasses}>
        <h3>Filter Your Search Here</h3>
        <FilterComp />
        <Row>
          {this.props.filteredItems.map((item) => (
            <Col key={item.itemId} md={6} sm={12} xs={12}>
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
  filteredItems: getFilteredItems(state),
});

export default connect(mapStateToProps, null)(SlidingDrawer);
