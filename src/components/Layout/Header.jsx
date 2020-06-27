import Avatar from "../Avatar";
import { MdSearch } from "react-icons/md";
// import { Form, Input } from "reactstrap";
import { Mercedes1 } from "../../assets/demoImages";

import React from "react";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  Form,
  Input,
  CardImg,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import {
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from "react-icons/md";
import bn from "../../utils/bemnames";
import Logo from "../../assets/Icons/Logo.svg";
import SharreIt from "../../assets/Icons/Logo2.svg";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../store/auth";
import { UserCard } from "../Card";
import routes from "../../config/routes";
// import authService from "../../services/authService";

// const user = authService.getUser();

const bem = bn.create("header");

class Header extends React.Component {
  state = {
    isOpenUserCardPopover: false,
    isOpenSearchCardPopover: false,
  };
  logout = () => {
    localStorage.clear();
    window.location = routes.homePage;
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  toggleSearchCardPopover = () => {
    this.setState({
      isOpenSearchCardPopover: !this.state.isOpenSearchCardPopover,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    const { isNotificationConfirmed } = this.state;
    return (
      <div id="Popover1">
        <Navbar fixed="top" light expand className={bem.b("bg-white")}>
          <Nav navbar>
            <img className="App-logo" alt="" src={Logo} />
          </Nav>
          <Nav navbar>
            <Link to={{ pathname: routes.homePage }}>
              <img className="App-logo2" alt="" src={SharreIt} />
            </Link>
          </Nav>
          {isDesktop ? (
            <Nav>
              <NavLink id="Popover1">
                <Form
                  inline
                  className="cr-search-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <MdSearch
                    size="20"
                    className="cr-search-form__icon-search text-secondary"
                  />
                  <Input
                    type="search"
                    className="cr-search-form__input"
                    placeholder="Search..."
                    onChange={this.toggleSearchCardPopover}
                  />
                </Form>
                <Popover
                  className="popover"
                  placement="bottom-start"
                  onClick={this.toggleSearchCardPopover}
                  isOpen={this.state.isOpenSearchCardPopover}
                  toggle={this.toggleSearchCardPopover}
                  target="Popover1"
                >
                  <PopoverBody className="p-2 border-light">
                    <h4>Search Results for ""</h4>
                    <hr />
                    <Row>
                      {/* //Do your Search Result Mapping Here */}
                      <Col md={4} className="searchResultsHeader">
                        <Card className="flex-row">
                          <div className="searchImgContainer">
                            <CardImg src={Mercedes1} />
                          </div>

                          <CardBody>
                            <CardTitle>Title Goes Here</CardTitle>
                            <CardText>Price</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="flex-row">
                          <div className="searchImgContainer">
                            <CardImg src={Mercedes1} />
                          </div>

                          <CardBody>
                            <CardTitle>Title Goes Here</CardTitle>
                            <CardText>Price</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="flex-row">
                          <div className="searchImgContainer">
                            <CardImg src={Mercedes1} />
                          </div>

                          <CardBody>
                            <CardTitle>Title Goes Here</CardTitle>
                            <CardText>Price</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="flex-row">
                          <div className="searchImgContainer">
                            <CardImg src={Mercedes1} />
                          </div>

                          <CardBody>
                            <CardTitle>Title Goes Here</CardTitle>
                            <CardText>Price</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="flex-row">
                          <div className="searchImgContainer">
                            <CardImg src={Mercedes1} />
                          </div>

                          <CardBody>
                            <CardTitle>Title Goes Here</CardTitle>
                            <CardText>Price</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      {/* //Do your Search Result Mapping Here */}
                    </Row>
                  </PopoverBody>
                </Popover>
              </NavLink>
            </Nav>
          ) : null}

          <Nav navbar className={bem.e("nav-right")}>
            <NavItem>
              <Link to={{ pathname: routes.postItem }}>
                <NavLink>
                  <Button>
                    {" "}
                    <MdExitToApp /> Share
                  </Button>
                </NavLink>
              </Link>
            </NavItem>

            <NavItem className="d-inline-flex">
              <NavLink className="position-relative">
                {isNotificationConfirmed ? null : (
                  <MdNotificationsNone
                    size={25}
                    className="text-secondary can-click"
                  />
                )}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink id="Popover2">
                {this.props.currentUser && (
                  <>
                    <div onClick={this.toggleUserCardPopover}>
                      <Avatar className="can-click" />
                      <Popover
                        onClick={this.toggleUserCardPopover}
                        placement="bottom-end"
                        isOpen={this.state.isOpenUserCardPopover}
                        toggle={this.toggleUserCardPopover}
                        target="Popover2"
                        className="p-0 border-0"
                        style={{ minWidth: 250 }}
                      >
                        <PopoverBody className="p-0 border-light">
                          <UserCard
                            title={
                              this.props.currentUser
                                ? this.props.currentUser.name
                                : "User Name"
                            }
                            subtitle={
                              this.props.currentUser
                                ? this.props.currentUser.email
                                : "User Email"
                            }
                            text={
                              this.props.currentUser
                                ? this.props.currentUser.location
                                : "User Location"
                            }
                            className="border-light"
                          >
                            <ListGroup flush>
                              <Link to={{ pathname: routes.profile }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdPersonPin /> Profile
                                </ListGroupItem>
                              </Link>
                              <Link to={{ pathname: routes.buyAndSell }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdInsertChart /> Activities
                                </ListGroupItem>
                              </Link>

                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdMessage /> Messages
                              </ListGroupItem>

                              <Link to={{ pathname: routes.Availability }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdInsertChart /> Your Items
                                </ListGroupItem>
                              </Link>
                              <Link to={{ pathname: routes.settings }}>
                                <ListGroupItem
                                  tag="button"
                                  action
                                  className="border-light"
                                >
                                  <MdSettingsApplications /> Settings
                                </ListGroupItem>
                              </Link>

                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdHelp /> Help
                              </ListGroupItem>
                              <ListGroupItem
                                onClick={this.logout}
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdExitToApp /> Signout
                              </ListGroupItem>
                            </ListGroup>
                          </UserCard>
                        </PopoverBody>
                      </Popover>
                    </div>
                  </>
                )}
                {!this.props.currentUser && (
                  <Link to={{ pathname: "/login" }}>
                    <Button>Login</Button>
                  </Link>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, null)(Header);
