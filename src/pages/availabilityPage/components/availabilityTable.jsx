import React, { Component } from "react";

class AvailabilityTable extends Component {
  columns = [
    {
      path: "id",
      lable: "Product ID",
    },
    { path: "title", lable: "Product Name" },
    { path: "created_at", lable: "Posted Date" },
    { path: "is_available", lable: "Availability" },
    { path: "dailyRentalRate", lable: "See Product" },
  ];
  render() {
    return <div></div>;
  }
}

export default AvailabilityTable;
