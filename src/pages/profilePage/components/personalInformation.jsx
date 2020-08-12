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
import { getProfile } from "../../../store/profile";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../store/auth";
import Rate from "../../common/rate";
import { getRates } from "../../../store/rates";
import MemberSince from "../../common/memberSince";

class PersonalInformationComp extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.currentUser, this.props.profile);
    const {
      telegram,
      facebook,
      phonenumber,
      website,
      whatsapp,
      // email,
    } = this.props.profile;
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
                  src={
                    this.props.profile.user && this.props.profile.user.avatar
                  }
                />
              </Col>
              <Col md={5} className="profileName">
                <h2>
                  {this.props.profile.user && this.props.profile.user.name}
                </h2>
                <Rate rates={this.props.rates} />
                <MemberSince
                  date={
                    this.props.profile.user &&
                    this.props.profile.user.created_at
                  }
                />
              </Col>
              <Col md={5} className="profileName">
                <>
                  <CardHeader>Contact Information</CardHeader>
                  <Row>
                    <Col md={4}>
                      {telegram && (
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Telegram}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {telegram}
                          </div>
                        </Row>
                      )}
                      {facebook && (
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Facebook}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {facebook}
                          </div>
                        </Row>
                      )}
                    </Col>
                    <Col md={4}>
                      {whatsapp && (
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={WhatsApp}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {whatsapp}
                          </div>
                        </Row>
                      )}
                      {website && (
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Website}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {website}
                          </div>
                        </Row>
                      )}
                    </Col>
                    <Col md={4}>
                      {
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Email}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {this.props.profile.user &&
                              this.props.profile.user.email}
                          </div>
                        </Row>
                      }
                      {phonenumber && (
                        <Row className="contactInformations">
                          <img
                            className="contactInformationIcons"
                            src={Phone}
                            alt=""
                          />
                          <div className="contactInformationLabels">
                            {phonenumber}
                          </div>
                        </Row>
                      )}
                    </Col>
                  </Row>
                </>
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
  rates: getRates(state),
});

export default connect(mapStateToProps)(PersonalInformationComp);
