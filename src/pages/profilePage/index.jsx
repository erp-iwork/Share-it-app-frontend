import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { PersonalInformation, Ratings, SharedItems } from "./components";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
    console.log("works here", userId)
    
  }
  render() {
    return (
      <Col>
        <PersonalInformation />
        <Row className="personalInformationbase">
          <Col md={3}>
            <Ratings />
          </Col>
          <Col md={9}>
            <SharedItems />
          </Col>
        </Row>
      </Col>
    );
  }
}

export default UserProfilePage;
