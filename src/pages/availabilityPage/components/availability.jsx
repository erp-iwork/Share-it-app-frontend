import React, { Component } from "react";
import { Card, CardHeader, Table, Button } from "reactstrap";
import Page from "../../../components/Page";
import Toggle from "react-toggle";
import { loadMyItems, getMyItems, updateItem } from "../../../store/items";
import { connect } from "react-redux";
import "react-toggle/style.css";
import { Link } from "react-router-dom";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const item = this.props.myItems.find(
      (item) => item.itemId === event.target.value
    );
    if (item) {
      const { is_available } = item;
      this.props.updateItem(event.target.value, {
        is_available: !is_available,
      });
    }
  };
  componentDidMount() {
    this.props.loadMyItems();
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
                <th>Availability</th>
                <th>See Product</th>
              </tr>
            </thead>
            <tbody>
              {this.props.myItems.map((item) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{item.itemId}</td>
                  <td>{item.title}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <Toggle
                      checked={item.is_available}
                      name="milkIsReady"
                      value={item.itemId}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    {" "}
                    <Link
                      className="btn btn-primary"
                      to={`/items/${item.itemId}`}
                      size="sm"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  myItems: getMyItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadMyItems: () => dispatch(loadMyItems()),
  updateItem: (itemId, item) => dispatch(updateItem(itemId, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Availability);
