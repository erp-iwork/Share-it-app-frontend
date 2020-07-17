import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { PersonalInformation, Ratings, SharedItems } from "./components";
import { loadSharedItems } from "../../store/sharedItems";
import { connect } from "react-redux";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
    if (userId === "me") return;
    this.props.loadSharedItems(userId);
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

const mapDispatchToProps = (dispatch) => ({
  loadSharedItems: (ownerId) => dispatch(loadSharedItems(ownerId)),
});
export default connect(null, mapDispatchToProps)(UserProfilePage);
