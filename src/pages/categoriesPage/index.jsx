import React, { Component } from "react";
import PremiumAds from "./components/premiumAds";
import Page from "../../components/Page";
import { Row, Col, Card, CardHeader, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import {
  Apartments,
  Books,
  Cleaner,
  Driver,
  FarmingEquipments,
  Houses,
  // Luggage,
  // Nanny,
  // MusicTeacher,
  // MusicInstruments,
  // PowerTools,
  // PersonalTrainer,
  // LoanService,
  // SeasonTickets,
  // Lecturer,
} from "../../assets/Sharreit-Icons";

class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.location.type,
    };
  }
  componentDidMount() {
    // const type = this.props.location.type;
  }
  render() {
    return (
      <Page>
        <PremiumAds />
        {/* <CategoriesList type={this.props.location.type} /> */}
        <Page breadcrumbs={[{ name: "Sub-Categories", active: true }]}>
          <Row>
            <Col xs={12} sm={6} md={2}>
              <Link to={{ pathname: routes.allItems }}>
                <Card>
                  <CardImg className="catIcons" src={Cleaner} />
                  <CardHeader align="center">Cleaner</CardHeader>
                </Card>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={2}>
              <Link to={{ pathname: routes.allItems }}>
                <Card>
                  <CardImg className="catIcons" src={Driver} />
                  <CardHeader align="center">Personal Driver</CardHeader>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={2}>
              <Card>
                <CardImg className="catIcons" src={Houses} />
                <CardHeader align="center">Houses</CardHeader>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2}>
              <Card>
                <CardImg className="catIcons" src={Books} />
                <CardHeader align="center">Books</CardHeader>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2}>
              <Card>
                <CardImg className="catIcons" src={Apartments} />
                <CardHeader align="center">Apartments</CardHeader>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={2}>
              <Card>
                <CardImg className="catIcons" src={FarmingEquipments} />
                <CardHeader align="center">Farming Equipments</CardHeader>
              </Card>
            </Col>
          </Row>
        </Page>
      </Page>
    );
  }
}

export default CategoriesPage;
