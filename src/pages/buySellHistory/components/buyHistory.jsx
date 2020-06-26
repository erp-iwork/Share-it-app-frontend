import React, { Component } from "react";
import { Card, CardHeader, Table, Button } from "reactstrap";
import Page from "../../../components/Page";

class BuyHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "Person Name", active: true }]}>
        <Card body>
          <CardHeader> Share Transaction</CardHeader>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Transaction ID</th>
                <th>Shared From</th>

                <th>Date Issued</th>
                <th>Date Returned</th>
                <th>See More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>
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
                <td>Otto</td>
                <td>Mark</td>
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
                <td>Otto</td>
                <td>Mark</td>
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

export default BuyHistory;
