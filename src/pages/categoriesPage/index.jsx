import React, { Component } from "react";
import CategoriesList from "./components/categoriesPage";
import PremiumAds from "./components/premiumAds";
import Page from "../../components/Page";

class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page
        title="Premium Ads"
        breadcrumbs={[{ name: "Category Name", active: true }]}
      >
        <PremiumAds />
        <CategoriesList />
      </Page>
    );
  }
}

export default CategoriesPage;
