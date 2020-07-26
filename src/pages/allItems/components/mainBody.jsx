import React, { Component } from "react";
import { Col, Row, Button, Input } from "reactstrap";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
//
import CategoryCard from "../components/categoryCard";
import HorizontalScroll from "react-scroll-horizontal";
import CategorySpacer from "../spacer";

//load items by subcategory and display
class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadFilteredItems({
      sub_category: this.props.subcategory.id,
    });
  }
  render() {
    const child = { width: `100%`, height: `300px` };
    const parent = { width: `100%`, height: `350px` };

    return (
      // <div>
      //   <Row>
      //     <Col md={7} align="center" className="searchformLayout">
      //       <h1>
      //         <b>SHARE ANYTHING ,ANYWHERE ...</b>
      //       </h1>
      //       <Input
      //         placeholder="Search Sharreit ..."
      //         className="searchInputHome"
      //       />
      //       <Col align="right">
      //         <Button className="buttonPaddingRight">SEARCH</Button>
      //         <b>
      //           <i>OR</i>
      //         </b>
      //         <Button outline className="buttonPaddingLeft" color="success">
      //           START SHARING
      //         </Button>
      //       </Col>
      //     </Col>
      //   </Row>
      //   <CategorySpacer title="Featured Categories" />
      // </div>
      <h1>
        Hello
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
