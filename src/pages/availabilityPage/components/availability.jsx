import React, { Component } from "react";
import { Card, CardHeader, Table, Button } from "reactstrap";
import Page from "../../../components/Page";
import Switch from "react-switch";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "Yohannes's Products", active: true }]}>
        <Card body>
          <CardHeader> Update Availabilities</CardHeader>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Posted Date</th>
                <th>Share Count</th>
                <th>Availability</th>
                <th>See Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>
                  <Switch
                    activeBoxShadow="0 0 2px 3px #3bf"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                  />
                </td>
                <td>
                  {" "}
                  <Button size="sm" outline>
                    See More
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>
                  {" "}
                  <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                  />
                </td>
                <td>
                  {" "}
                  <Button size="sm" outline>
                    See More
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>
                  {" "}
                  <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                  />
                </td>
                <td>
                  {" "}
                  <Button size="sm" outline>
                    See More
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Page>
    );
  }
}

export default Availability;
