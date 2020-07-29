import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../components/Page";

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page
        title="Search Results for ..."
        className="SearchResultsContainer m-4"
      >
        <hr />
        <Row>
          <Col md={3} sm={12} xs={12}>
            Do your mappings Here
          </Col>
          <Col md={3} sm={12} xs={12}>
            Do your mappings Here
          </Col>
        </Row>
      </Page>
    );
  }
}

export default SearchResultsPage;
