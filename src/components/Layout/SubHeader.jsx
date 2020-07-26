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
    };
  }
  componentDidMount() {
    this.props.loadCategories();
  }

  toggleSubCategoriesPopover = () => {
    this.setState({
      isOpenSubCategoriesPopover: !this.state.isOpenSubCategoriesPopover,
      isOpenSearchCardPopover: false,
    });
  };

  render() {
    return (
      <div className="bg-gradient-theme-right">
        <hr className="divider" />
        <Row align="right" className="subHeaderContainer">
          <Col >
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenSubCategoriesPopover}
              toggle={this.toggleSubCategoriesPopover}
              target="Popover3"
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
            <Button
              outline
              color="light"
              onMouseEnter={this.toggleSubCategoriesPopover}
              onFocus={this.toggleSubCategoriesPopover}
            >
              {" "}
              Product Sharing <MdArrowDropDown />
            </Button>

            <Button
              onMouseEnter={this.toggleSubCategoriesPopover}
              onFocus={this.toggleSubCategoriesPopover}
              outline
              color="light"
              className="subHeaderButtons"
              id='Popover3'
            >
              {" "}
              Service Sharing <MdArrowDropDown />
            </Button>

            <Button
              onMouseEnter={this.toggleSubCategoriesPopover}
              onFocus={this.toggleSubCategoriesPopover}
              outline
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
