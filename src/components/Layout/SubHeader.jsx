import React from "react";
import {
  Col,
  Row,
  Button,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  PopoverHeader,
} from "reactstrap";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
import { MdArrowDropDown, MdList } from "react-icons/md";

//load categories

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSubCategoriesPopover: false,
      isOpenSearchCardPopover: false,
      target: "ServicePopover",
    };
  }
  componentDidMount() {
    this.props.loadCategories();
  }
  toggleSubCategoriesPopover = (target) => {
    this.setState({
      target: target,
      isOpenSubCategoriesPopover: !this.state.isOpenSubCategoriesPopover,
      isOpenSearchCardPopover: false,
    });
  };

  render() {
    return (
      <div className="bg-gradient-theme-right">
        <Popover
          placement="bottom-end"
          isOpen={this.state.isOpenSubCategoriesPopover}
          toggle={this.toggleSubCategoriesPopover}
          target={this.state.target}
          className="p-2 border-5"
          style={{ minWidth: 450 }}
        >
          <PopoverBody className="p-2 border-light">
            <PopoverHeader>SubCategories</PopoverHeader>
            <ListGroup flush>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdList /> Sub-category Goes Here
              </ListGroupItem>
            </ListGroup>
          </PopoverBody>
        </Popover>

        <hr className="divider" />
        <Row align="right" className="subHeaderContainer">
          <Col>
            <Button
              outline
              color="light"
              id="ProductPopver"
              onClick={() => this.toggleSubCategoriesPopover("ProductPopver")}
            >
              {" "}
              Product Sharing <MdArrowDropDown />
            </Button>

            <Button
              onClick={() => this.toggleSubCategoriesPopover("ServicePopover")}
              outline
              color="light"
              id="ServicePopover"
              className="subHeaderButtons"
            >
              {" "}
              Service Sharing <MdArrowDropDown />
            </Button>

            <Button
              onClick={() => this.toggleSubCategoriesPopover("DigitalPopover")}
              outline
              id="DigitalPopover"
              color="light"
            >
              {" "}
              Digital Sharing <MdArrowDropDown />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
