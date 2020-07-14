import Avatar from "../Avatar";
import { MdSearch } from "react-icons/md";

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
import { UserCard } from "../Card";
import routes from "../../config/routes";
import PageSpinner from "../../components/PageSpinner";
import { getCurrentUser } from "../../store/auth";
import { getLoading, getSearchedItems, searchItems } from "../../store/items";
const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      isOpenUserCardPopover: false,
      isOpenSearchCardPopover: false,
      query: "",
      focused: false,
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

  onFocus = () => {
    this.setState({ focused: true });
  };
  onBlur = () => {
    this.setState({ focused: false, isOpenSearchCardPopover: false });
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
      isOpenSearchCardPopover: false,
    });
  };

  toggleSearchCardPopover = (evt) => {
    if (evt.target.value && evt.target.value.length >= 3) {
      this.props.searchItems(evt.target.value);
      this.setState({
        isOpenSearchCardPopover: this.state.focused,
        isOpenUserCardPopover: false,
        query: evt.target.value,
      });
    } else {
      this.setState({
        query: evt.target.value,
      });
    }
  };

  logout = () => {
    localStorage.clear();
    window.location = routes.homePage;
  };

  render() {
    const isDesktop = this.state.isDesktop;

    const { isNotificationConfirmed } = this.state;
    return (
      <Navbar fixed="top" light expand className={bem.b("bg-white")}>
        <Nav navbar className="App-logo">
          <img alt="" src={Logo} />
        </Nav>
        <Nav navbar>
          <Link to={{ pathname: routes.homePage }}>
            <img className="App-logo2" alt="" src={SharreIt} />
          </Link>
        </Nav>
        {isDesktop ? (
          <Nav navbar>
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
                  type="text"
                  className="cr-search-form__input"
                  placeholder="Search ..."
                  value={this.state.query}
                  onChange={this.toggleSearchCardPopover}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                {this.props.loading && this.state.query && <PageSpinner />}
              </Form>

              <Popover
                placement="bottom-start"
                onClick={this.toggleSearchCardPopover}
                isOpen={this.state.isOpenSearchCardPopover}
                toggle={this.toggleSearchCardPopover}
                className="p-0 border-0"
                target="Popover1"
              >
                <div className="popoverSearch">
                  <PopoverBody className="p-4 border-secondary">
                    <h6>Search Results for "{this.state.query}"</h6>
                    <hr />
                    {/* //Do your Search Result Mapping Here */}
                    {console.log(this.props.items)}

                    {this.props.items
                      ? this.props.items.map((item) => (
                        <Col
                          // md={4}
                          className="searchResultsHeader"
                          key={item.itemId}
                        >
                          <Link to={`/items/${item.itemId}`}>
                            <div className="zoom">
                              <Card className="flex-row">
                                <div className="searchImgContainer">
                                  <CardImg
                                    src={item.item_images[0].image}
                                  />
                                </div>

                                <CardBody>
                                  <CardTitle>{item.title}</CardTitle>
                                  <CardText>{item.price}</CardText>
                                </CardBody>
                              </Card>
                            </div>
                          </Link>
                        </Col>
                      ))
                      : null}

                    {/* //Do your Search Result Mapping Here */}
                  </PopoverBody>
                </div>
              </Popover>
            </NavLink>
          </Nav>
        ) : null}

        <Nav navbar className={bem.e("nav-right")}>
          {this.props.currentUser ? (
            <NavItem>
              <Link to={{ pathname: routes.postItem }}>
                <NavLink>
                  <Button>
                    {" "}
                    <MdExitToApp /> Start Sharing
                  </Button>
                </NavLink>
              </Link>
            </NavItem>
          ) : (
              <NavItem>
                <Link to={{ pathname: "/login" }}>
                  <NavLink>
                    <Button>
                      {" "}
                      <MdExitToApp /> Start Sharing
                  </Button>
                  </NavLink>
                </Link>
              </NavItem>
            )}

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
                            <Link to={{ pathname: "/messages" }}>
                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdMessage /> Messages
                            </ListGroupItem>
                            </Link>


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
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  items: getSearchedItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchItems: (query) => dispatch(searchItems(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
