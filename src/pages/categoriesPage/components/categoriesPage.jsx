import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardImg } from "reactstrap";
import Page from "../../../components/Page";
import {
  Apartments,
  Books,
  Cleaner,
  Driver,
  FarmingEquipments,
  Houses,
  // Luggage, Nanny, MusicTeacher, MusicInstruments ,PowerTools,
  // PersonalTrainer, LoanService,
  // SeasonTickets, Lecturer
} from "../../../assets/Sharreit-Icons";
// import { notification } from "antd";
// import { SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";


// const openNotification = () => {
//   notification.open({
//     message: "Some Notification Goes Here",
//     description:
//       "Some Notification Goes Here Some Notification Goes Here Some Notification Goes Here",
//     icon: <SmileOutlined style={{ color: "#108ee9" }} />,
//     style: {
//       // backgroundColor: "#1081D1",
//       // color: "#ffffff",
//       borderRadius: 20,
//     },
//     top: 80,
//     duration: 2,
//     rtl: true,
//   });
// };

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "Sub-Categories", active: true }]}>
        <Row>
          <Col xs={12} sm={6} md={2}>
            <Link to={{ pathname: routes.allItems }}>


              <Card
              // onClick={() => openNotification()}
              >
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
    );
  }
}

export default CategoriesList;
