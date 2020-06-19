import React, { Component } from "react";
import { Col, Row, Card, CardHeader } from "reactstrap";
import CoverImage from "../../../assets/car1.png";
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
class PersonalInformationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
          <img className='coverImageContainerimg' src={CoverImage} alt="" />
          <Col>
            <Card className="personalInformationMargin">
              <Row>
                <Col md={2} align="center">
                  <Avatar size={150} className="profileAvatar" />
                </Col>
                <Col md={5} className="profileName">
                  <h2>John Doe</h2>
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
                </Col>
              </Row>
            </Card>
          </Col>
      </>
    );
  }
}

export default PersonalInformationComp;
