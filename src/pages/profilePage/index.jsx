import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { PersonalInformation, Ratings, SharedItems } from "./components";
import { loadSharedItems } from "../../store/sharedItems";
import { connect } from "react-redux";
import { loadProfile } from "../../store/profile";
import { setSelectedUserId } from "../../store/users";
import { loadRates } from "../../store/rates";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    const userId = this.props.match.params.id;

    await this.props.loadSharedItems(userId);
    await this.props.loadProfile(userId);
    this.props.setSelectedUserId(userId);
    this.props.loadRates(userId);
    this.state = {
      userId,
    };
  };
  componentDidUpdate = async (prevProps, prevState) => {
    /**
     * this is the initial render
     * without a previous prop change
     */
    if (prevProps == undefined) {
      return false;
    }
    const userId = this.props.match.params.id;
    if (this.state.userId != userId) {
      await this.props.loadSharedItems(userId);
      await this.props.loadProfile(userId);
      this.props.setSelectedUserId(userId);
      this.props.loadRates(userId);
      this.state = {
        userId,
      };
    }
  };
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
  loadProfile: (userId) => dispatch(loadProfile(userId)),
  setSelectedUserId: (userId) => dispatch(setSelectedUserId(userId)),
  loadRates: (userId) => dispatch(loadRates(userId)),
});
export default connect(null, mapDispatchToProps)(UserProfilePage);
