import React, { Component } from "react";
import { Col, Row, Button, Input } from "reactstrap";
import Page from "../../../components/Page";
// import Items from "../../homePage/components/item";??
import Item from "../../homePage/components/item";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
import ItemsImage from "../../../assets/newResources/itemsPagePic.png";
import Shimmer from "react-shimmer-effect";
import CategoryCard from '../components/categoryCard';
import HorizontalScroll from "react-scroll-horizontal";
import CategorySpacer from '../spacer';



//load items by subcategory and display
class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadFilteredItems({
      sub_category: this.props.subcategory.id,
    });
  }
  render() {
    const child = { width: `100%`, height: `70px` };
    const parent = { width: `100%`, height: `250px` };
    return (
      <div className="BackContainer">
        {/* <Page
          className="mainBodyContainer"
          breadcrumbs={[{ name: this.props.subcategory.name, active: true }]}
        > */}


          <Row>
            <Col md={3} className="searchImageContainer">
              <img src={ItemsImage} alt="" />
            </Col>
            <Col md={7} align="center" className="searchformLayout">
              <h1>
                <b>
                  SHARE ANYTHING ,ANYWHERE ...
                </b>
              </h1>
              <Input
                placeholder="Search Sharreit ..."
                className="searchInputHome"
              />
              <Col align="right">
                <Button className="buttonPaddingRight">SEARCH</Button>
                <b>
                  <i>OR</i>
                </b>
                <Button outline className="buttonPaddingLeft" color="success">
                  START SHARING
              </Button>
              </Col>
            </Col>


          </Row>
        
            
        <CategorySpacer title="Featired categories "/>
          <Row>

            <div style={parent}>
              <HorizontalScroll
                config={{ stiffness: 50, damping: 20 }}
                animValues={2}
                reverseScroll={false}
              >
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />

              </HorizontalScroll>
            </div>

          </Row>
        
      </div>
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
