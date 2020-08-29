import React, { Component } from "react";
import { Input, Label, FormGroup, Button, FormFeedback } from "reactstrap";

import Joi from "joi-browser";
import { MdSave } from "react-icons/md";
import LoadingSpinner from "../../components/loader";

class SettingForm extends Component {
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
    const obj = { [name]: value }; // [name](computed property) ==> username as a key or somethig, value= value of it.
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); //if trusy errors eles empty object
    if (errors) return;
    this.doSubmit();
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

  renderButton(label) {
    return (
      <Button outline disabled={this.props.loading}>
        {" "}
        <MdSave className="mr-1" />
        {this.props.loading ? <LoadingSpinner /> : label}
      </Button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input
          type={type}
          name={name}
          placeholder={label}
          value={data[name]}
          onChange={this.handleChange}
          invalid={errors[name] ? true : false}
        />
        <FormFeedback>{errors[name]}</FormFeedback>
      </FormGroup>
    );
  }
}

export default SettingForm;
