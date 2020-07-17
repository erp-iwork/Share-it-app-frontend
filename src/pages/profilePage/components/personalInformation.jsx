import React, { Component } from "react";
import { Col, Row, Card, CardHeader } from "reactstrap";
import CoverImage from "../../../assets/Icons/CLogo.svg";
import Avatar from "../../../components/Avatar";
import { MdStar, MdStarBorder } from "react-icons/md";
import {
  Telegram,
  Email,
  Facebook,
  Website,
  WhatsApp,
  Phone,
} from "../../../assets/SharreIt-ContactIcons";
import { getProfile, loadProfile } from "../../../store/users";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../store/auth";

class PersonalInformationComp extends Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    console.log(this.props.currentUser, this.props.profile);
    return (
      <>
        <div className="coverImageContainer">
          <img src={CoverImage} alt="" />
        </div>
        <Col>
          <Card className="personalInformationMargin">
            <Row>
              <Col md={2} align="center">
                <Avatar
                  size={150}
                  className="profileAvatar"
                  // src={this.props.currentUser.avatar}
                />
              </Col>
              <Col md={5} className="profileName">
                <h2>{this.props.currentUser.name}</h2>
                <MdStar fontSize={30} className="rating" />
                <MdStar fontSize={30} className="rating" />
                <MdStarBorder fontSize={30} />
                <MdStarBorder fontSize={30} />
                <MdStarBorder fontSize={30} /> (23)
                <div>
                  Member Since: <b>12/04/2016</b>
                </div>
              </Col>
              <Col md={5} className="profileName">
                {this.props.profile && this.props.profile.user_profile && (
                  <>
                    <CardHeader>Contact Information</CardHeader>
                    <Row>
                      <Col md={4}>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Telegram}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            Telegram Username
                          </div>
                        </Row>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Facebook}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            Facebook Username
                          </div>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={WhatsApp}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            WhatsApp Username
                          </div>
                        </Row>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Website}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            Website(if-any)
                          </div>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Email}
                            alt=""
                          />
                          <div className="contactInformationLabels">Email</div>
                        </Row>
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Phone}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            Phone Number
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  currentUser: getCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadProfile: () => dispatch(loadProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformationComp);
