import React, { Component } from "react";
import { Input, Label, Col, FormGroup, Button } from "reactstrap";

class MainForm extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <FormGroup align="center" md={12}>
        <Button>{label}</Button>
      </FormGroup>
    );
  }
  renderInput(name, label, placeholder, type = "text") {
    return (
      <FormGroup>
        <Label for={name} sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        </Col>
      </FormGroup>
    );
  }
  render() {
    return <div></div>;
  }
}

export default MainForm;
