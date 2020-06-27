import React, { Component } from "react";
import { SubscriptionService, SeasonTickets } from "./DigitalSharing";
import { Col, FormGroup, Input, Label } from "reactstrap";

class DigitalSharing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonTickets: false,
      subscriptionServices: false,
    };
  }

  handleChange = (event) => {
    if (
      event.target.value === "SeasonTickets" &&
      event.target.name === "SharingType"
    ) {
      this.setState({
        seasonTickets: true,
        subscriptionServices: false,
      });
    } else if (
      event.target.value === "SubscriptionServices" &&
      event.target.name === "SharingType"
    ) {
      this.setState({
        subscriptionServices: true,
        seasonTickets: false,
      });
    }
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { subscriptionServices, seasonTickets } = this.state;

    return (
      <Col xs={12} md={12}>
        <FormGroup>
          <Label for="exampleEmail" sm={12}>
            Service Type
          </Label>
          <Col sm={12}>
            <Input
              type="select"
              name="SharingType"
              onChange={this.handleChange}
            >
              <option selected value="Selected"> Type</option>
              <option value="SubscriptionServices">
                Subscription Services
              </option>
              <option value="SeasonTickets">Season Tickets</option>
            </Input>
          </Col>
        </FormGroup>

        {subscriptionServices && <SubscriptionService />}
        {seasonTickets && <SeasonTickets />}
      </Col>
    );
  }
}

export default DigitalSharing;
