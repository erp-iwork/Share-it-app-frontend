import React, { Component } from "react";
import PremiumAds from "./components/premiumAds";
import Page from "../../components/Page";
import { Row, Col, Card, CardHeader, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { categories, subCategories, icons } from "./categories";
import {
  getSubcategoriesByCategoryId,
  loadSubcategoriesByCategoryId,
} from "../../store/subcategories";
import { connect } from "react-redux";

//load subcategory by category id
//category id from url
class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.location.type,
    };
  }
  componentDidMount() {
    const categoryId = this.props.match.params.id;
    this.props.loadSubcategoriesByCategoryId(categoryId);
  }
  render() {
    return (
      <Page>
        <PremiumAds />
        <Page breadcrumbs={[{ name: "Sub-Categories", active: true }]}>
          <Row>
            {this.props.subcategories.map((subcategory) => (
              <Col xs={12} sm={6} md={2}>
                <Link
                  to={{
                    pathname: routes.allItems,
                    state: { subcategory: subcategory },
                  }}
                >
                  <Card className="zoom">
                    <div className="zoomCategory">
                      <CardImg className="catIcons" src={subcategory.icon} />
                    </div>

                    <CardHeader align="center">{subcategory.name}</CardHeader>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Page>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  subcategories: getSubcategoriesByCategoryId(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadSubcategoriesByCategoryId: (category_id) =>
    dispatch(loadSubcategoriesByCategoryId(category_id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
