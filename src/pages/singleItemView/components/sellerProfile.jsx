import React, { Component } from "react";
import { Col, Card, Row } from "reactstrap";
import Avatar from "../../../components/Avatar";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Rate from "../../common/rate";
import MemberSince from "../../common/memberSince";

class SellerProfileComp extends Component {
  render() {
    const { owner, rating } = this.props.selectedItem;
    return (
      <Card renderAs={Link} className="sellerProfile">
        <Col>
          <Row>
            <Link to={`/profiles/${owner.id}`}>
              <Col md={3}>
                <Avatar size={60} src={owner.avatar} />
              </Col>
            </Link>

            <Col>
              <h4>{owner ? owner.name : ""}</h4>
              <Rate rates={rating} />
              <MemberSince date={owner.created_at}></MemberSince>
            </Col>
          </Row>
          <hr />
        </Col>
      </Card>
    );
  }
}

export default SellerProfileComp;
