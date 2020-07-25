import React from "react";
import {
  Card,
  Col,
  Row,
  Button,
  NavLink,
  NavItem,
  Nav,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  PopoverHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
import {
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
  MdFilterList,
  MdArrowDropDown,
  MdList,
} from "react-icons/md";

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
          <Col>
            <Popover
              placement="left-start"
              isOpen={this.state.isOpenSubCategoriesPopover}
              toggle={this.toggleSubCategoriesPopover}
              target="Popover3"
              className="p-2 border-5"
              style={{ minWidth: 600 }}
            >
              <PopoverBody className="p-2 border-light">
                <PopoverHeader>SubCategories</PopoverHeader>
                <ListGroup flush>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>

                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>

                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>

                  <ListGroupItem tag="button" action className="border-light">
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>
                  <ListGroupItem
                    tag="button"
                    action
                    className="border-light"
                  >
                    <MdList /> Sub-category Goes HEre
                  </ListGroupItem>
                </ListGroup>
              </PopoverBody>
            </Popover>
            <Button
              outline
              color="light"
              onClick={this.toggleSubCategoriesPopover}
            >
              {" "}
              PRODUCT SHARING <MdArrowDropDown />
            </Button>

            <Button
              id="Popover3"
              onClick={this.toggleSubCategoriesPopover}
              outline
              color="light"
              className="subHeaderButtons"
            >
              {" "}
              SERVICE SHARING <MdArrowDropDown />
            </Button>

            <Button
              id="Popover3"
              onClick={this.toggleSubCategoriesPopover}
              outline
              color="light"
            >
              {" "}
              DIGITAL SHARING <MdArrowDropDown />
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
