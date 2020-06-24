import React, { Component } from "react";
import { Input, Label, Col, FormGroup, Button, FormFeedback } from "reactstrap";
import LoadingSpinner from "./loader";

class NestedForm extends Component {
  state = {
    data: {},
  };

  // when the user types to change the value of the state accordingly
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value; //dynamically access .. property
    this.setState({ data });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <FormGroup align="center" md={12}>
        <Button block outline disabled={this.props.loading}>
          {this.props.loading ? <LoadingSpinner /> : label}
        </Button>
      </FormGroup>
    );
  }
  renderSelect(name, label, options) {
    const { data } = this.state;
    return (
      <FormGroup>
        <Label htmlFor={name} sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type="select"
            name={name}
            onChange={this.handleChange}
            value={data[name]}
            invalid={
              this.props.errors && this.props.errors[name] ? true : false
            }
          >
            <option value="" />
            {options.map((option) => (
              <option value={option.id}>{option.category}</option>
            ))}
          </Input>
          <FormFeedback>
            {this.props.errors && this.props.errors[name]}
          </FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  renderInput(name, label, placeholder, type = "text") {
    const { data } = this.state;
    return (
      <FormGroup>
        <Label for={name} sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type={type}
            name={name}
            value={data[name]}
            placeholder={placeholder}
            onChange={this.handleChange}
            invalid={
              this.props.errors && this.props.errors[name] ? true : false
            }
          />
          <FormFeedback>
            {this.props.errors && this.props.errors[name]}
          </FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  render() {
    return <div></div>;
  }
}

export default NestedForm;
