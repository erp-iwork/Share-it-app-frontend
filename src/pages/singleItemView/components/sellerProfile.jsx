import React, { Component } from "react";
import { Col, Card, Row } from "reactstrap";
import Avatar from "../../../components/Avatar";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

class SellerProfileComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Card renderAs={Link} className="sellerProfile">
        <Col>
          <Row>
            <Col md={3}>
              <Avatar size={60} />
            </Col>
            <Col>
              <h4>John Doe</h4>
              <MdStar  fontSize={23}className="rating" />
              <MdStar  fontSize={23}className="rating" />
              <MdStarBorder  fontSize={23}/>
              <MdStarBorder  fontSize={23}/>
              <MdStarBorder fontSize={23} /> (23)
              <div>
                Member Since: <b>12/04/2016</b>
              </div>
            </Col>
          </Row>
          <hr />
        </Col>
      </Card>

    );
  }
}

export default SellerProfileComp;
