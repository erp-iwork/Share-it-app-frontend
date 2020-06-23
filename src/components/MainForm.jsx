import React, { Component } from "react";
import { Input, Label, Col, FormGroup, Button, FormFeedback } from "reactstrap";

import Joi from "joi-browser";
import LoadingSpinner from "./loader";

class MainForm extends Component {
  state = {
    data: {},
    errors: {},
  };
  //validate the entire form
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    //to map joi error array to our errors object
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  //validate only one input
  validateProperty = ({ name, value }) => {
    const { data } = this.state;
    if (name !== "confirmPassword") {
      const obj = { [name]: value }; // [name](computed property) ==> username as a key or somethig, value= value of it.
      const schema = { [name]: this.schema[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    } else {
      if (data["password"] !== value) {
        const obj = { [name]: value }; // [name](computed property) ==> username as a key or somethig, value= value of it.
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      }
    }
  };
  // when the user types to change the value of the state accordingly
  handleChange = ({ currentTarget: input }) => {
    //to validate single input when we type
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; //dynamically access .. property
    this.setState({ data, errors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); //if trusy errors eles empty object
    if (errors) return;
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <FormGroup align="center" md={12}>
        <Button disabled={this.validate() || this.props.loading}>
          {this.props.loading ? <LoadingSpinner /> : label}
        </Button>
      </FormGroup>
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
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
            invalid={errors[name] ? true : false}
          >
            <option value="" />
            {options.map((option) => (
              <option value={option.id}>{option.category}</option>
            ))}
          </Input>
          <FormFeedback>{errors[name]}</FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  renderInput(name, label, placeholder, type = "text") {
    const { errors, data } = this.state;
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
            invalid={errors[name] ? true : false}
          />
          <FormFeedback>{errors[name]}</FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  render() {
    return <div></div>;
  }
}

export default MainForm;
