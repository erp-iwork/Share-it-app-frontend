import React, { Component } from "react";
import PremiumAds from "./components/premiumAds";
import Page from "../../components/Page";
import { Row, Col, Card, CardHeader, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { categories, subCategories, icons } from "./categories";

class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.location.type,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <Page>
        <PremiumAds />
        <Page breadcrumbs={[{ name: "Sub-Categories", active: true }]}>
          <Row>
            {subCategories[categories[this.props.location.type]].map(
              (item, index) => (
                <Col xs={12} sm={6} md={2}>
                  <Link to={{ pathname: routes.allItems, subCategory: index }}>
                    <Card>
                      <CardImg
                        className="catIcons"
                        src={icons[categories[this.props.location.type]][index]}
                      />
                      <CardHeader align="center">{item}</CardHeader>
                    </Card>
                  </Link>
                </Col>
              )
            )}
          </Row>
        </Page>
      </Page>
    );
  }
}

export default CategoriesPage;
