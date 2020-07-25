import React, { Component } from "react";
import { Input, Label, Button, FormFeedback } from "reactstrap";
import LoadingSpinner from "../../../components/loader";

class FilterForm extends Component {
  state = {
    data: {},
  };
  isDonatingOptions = [
    {
      id: "false",
      name: "Sharing",
    },
    {
      id: "true",
      name: "Donating",
    },
  ];
  // when the user types to change the value of the state accordingly
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    if (input.name === "category_id") {
      this.props.loadSubcategoriesByCategoryId(input.value);
    }
    data[input.name] = input.value; //dynamically access .. property
    this.setState({ data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <Button block disabled={this.props.loading}>
        {this.props.loading ? <LoadingSpinner /> : label}
      </Button>
    );
  }
  renderSelect(name, label, options) {
    const { data } = this.state;
    return (
      <>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type="select"
          name={name}
          onChange={this.handleChange}
          value={data[name]}
          invalid={this.props.errors && this.props.errors[name] ? true : false}
        >
          <option value="" />
          {options.map((option) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </Input>
        <FormFeedback>
          {this.props.errors && this.props.errors[name]}
        </FormFeedback>
      </>
    );
  }
  renderInput(name, label, type = "text") {
    const { data } = this.state;
    return (
      <>
        <Input
          type={type}
          name={name}
          value={data[name]}
          placeholder={label}
          onChange={this.handleChange}
          invalid={this.props.errors && this.props.errors[name] ? true : false}
        />
        <FormFeedback>
          {this.props.errors && this.props.errors[name]}
        </FormFeedback>
      </>
    );
  }
  render() {
    return <div></div>;
  }
}

export default FilterForm;
