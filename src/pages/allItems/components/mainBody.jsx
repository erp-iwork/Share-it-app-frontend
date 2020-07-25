import React, { Component } from "react";
import { Col, Row, Button, Input, Container, Jumbotron } from "reactstrap";
import Page from "../../../components/Page";
// import Items from "../../homePage/components/item";??
import Item from "../../homePage/components/item";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
import categoryRibbon from "../../../assets/newResources/categoryRibbon.jpg";
import Shimmer from "react-shimmer-effect";
import CategoryCard from '../components/categoryCard';
import HorizontalScroll from "react-scroll-horizontal";
import CategorySpacer from '../spacer';
import PopularAmongUsers from '../../homePage/components/PopularAmongUsers';



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
      <div >
        {/* <Page
          className="mainBodyContainer"
          breadcrumbs={[{ name: this.props.subcategory.name, active: true }]}
        > */}

        <Jumbotron className="containerSize" style={{ backgroundImage: `url(${categoryRibbon})` }}>
      
          <Container>
            <Row >
          <Row  >
              <h2>
                  SHARE ANYTHING ,ANYWHERE ...
              </h2>
              <Input
                placeholder="Search Sharreit ..."
                className="searchInputHome"
            />      
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Button size="lg" className="buttonPaddingRight">SEARCH</Button>
                <b>
                  <i>OR</i>
                </b>
                <Button outline className="buttonPaddingLeft" color="success">
                  START SHARING
              </Button>
              </Col>
              </Row>
            </Row>

          
          </Container>
          
          <Container>
            <Row className="featureditemButton" >
              <Row>
                <h2>
                  <b>
                    Top searches
                    </b>
                  </h2>
                  <Col>                  
                  <Button outline color="secondary" size="lg" >searched item </Button> 
                  <b>
                    <i>  </i>
                  </b>
                  <Button outline color="secondary" size="lg" >searched item</Button>
                  <b>
                    <i>  </i>
                  </b>
                  <Button outline color="secondary" size="lg" >searched item</Button>
                  <b>
                    <i>  </i>
                  </b>
                  <Button outline color="secondary" size="lg" >searched item</Button>
                  <b>
                    <i>  </i>
                  </b>
                  <Button outline color="secondary" size="lg" >searched item</Button>
                  </Col>
                </Row>                
            </Row>    
          </Container>
        </Jumbotron>
        

        <CategorySpacer title="Todays Featured Items "/>
          <Row>

            <div style={parent}>
              <HorizontalScroll
                config={{ stiffness: 50, damping: 20 }}
                animValues={10}
                reverseScroll={false}
              >
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
                <CategoryCard style={child} />
              <CategoryCard style={child} />
              <CategoryCard style={child} />
              <CategoryCard style={child} />
              <CategoryCard style={child} />
              <CategoryCard style={child} />

            </HorizontalScroll>
            <CategorySpacer title="Suggested items  " />

            <PopularAmongUsers/>
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
