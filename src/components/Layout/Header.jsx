import Avatar from "../Avatar";
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
  Button,
  Badge,
  UncontrolledPopover,
} from "reactstrap";
import {
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdPersonPin,
  MdSettingsApplications,
  MdFilterList,
  MdArrowDropDown,
  MdSettingsBackupRestore,
  MdSecurity,
  MdPanoramaFishEye,
  MdQuestionAnswer,
  MdPageview,
  MdPerson,
  MdNotificationsActive,
  MdNotificationsNone,
} from "react-icons/md";
// import "rsuite/dist/styles/rsuite-default.css";
import Logo from "../../assets/Icons/Logo.svg";
import SharreIt from "../../assets/Icons/Logo2.svg";
import { Link, Redirect } from "react-router-dom";
import { UserCard } from "../Card";
import routes from "../../config/routes";
// import PageSpinner from "../../components/PageSpinner";
import { getUser } from "../../store/users";
import { getLoading, getSearchedItems, searchItems } from "../../store/items";
import bn from "../../utils/bemnames";
//for unread message
import { wsConnect } from "../../store/websocket";
import { chatApi } from "../../store/chat-api";
import { getUnreadMessageCount } from "../../store/chat";

const bem = bn.create("header");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      isOpenUserCardPopover: false,
      isOpenSearchCardPopover: false,
      isOpenAboutPopover: false,
      query: "",
      focused: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.props.wsConnect(chatApi);
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
  toggleAboutPopover = (target) => {
    this.setState({
      target: target,
      isOpenAboutPopover: !this.state.isOpenAboutPopover,
      isOpenSearchCardPopover: false,
    });
  };

  logout = () => {
    localStorage.clear();
    window.location = routes.homePage;
  };
  // toggleNotificationPopover = () => {
  //   console.log("clicked");
  //   this.props.history.push("/chat");
  // };

  render() {
    // const isDesktop = this.state.isDesktop;
    return (
      <Navbar light expand className="bg-gradient-theme-right">
        <Popover
          placement="bottom"
          isOpen={this.state.isOpenAboutPopover}
          toggle={this.toggleAboutPopover}
          target="AboutPopover"
          className="p-2 border-5"
        >
          <PopoverBody className="p-2 border-light">
            <ListGroup flush>
              <Link to={{ pathname: routes.aboutUs }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdPerson className="mr-3" /> {"  "} About Us
                </ListGroupItem>
              </Link>
              <Link to={{ pathname: routes.howSharreitWorks }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdHelp className="mr-3" /> How Sharreit Works
                </ListGroupItem>
              </Link>

              <Link to={{ pathname: routes.security }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdSecurity className="mr-3" /> Security
                </ListGroupItem>
              </Link>
              <Link to={{ pathname: routes.guarentee }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdSettingsBackupRestore className="mr-3" /> Guarantee
                </ListGroupItem>
              </Link>
              <Link to={{ pathname: routes.homePage }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdPanoramaFishEye className="mr-3" /> Browse Sharreit
                </ListGroupItem>
              </Link>
              <Link to={{ pathname: routes.FAQ }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdQuestionAnswer className="mr-3" /> FAQ
                </ListGroupItem>
              </Link>
              <Link to={{ pathname: routes.termsAndConditions }}>
                <ListGroupItem tag="button" action className="border-light">
                  <MdPageview className="mr-3" /> Terms Of Service
                </ListGroupItem>
              </Link>
            </ListGroup>
          </PopoverBody>
        </Popover>
        <Nav navbar>
          <img className="App-logo" alt="" src={Logo} />
        </Nav>
        <Nav navbar>
          <Link to={{ pathname: routes.homePage }}>
            <img className="App-logo2" alt="" src={SharreIt} />
          </Link>
        </Nav>
        <Nav navbar className={bem.e("nav-right")}>
          <NavItem className="d-inline-flex">
            <NavLink className="position-relative">
              {/* //Use this if there isn't any notifications?? */}
              {this.props.unreadMessageCount <= 0 || "" ? (
                <Link to={routes.chat}>
                  <MdNotificationsNone
                    size={25}
                    className="text-light"
                    onClick={this.toggleNotificationPopover}
                  />
                </Link>
              ) : (
                <Link to={routes.chat}>
                  <MdNotificationsActive
                    size={25}
                    className="text-light can-click animated swing infinite"
                    onClick={this.toggleNotificationPopover}
                  />
                </Link>
              )}
              {/* //Use the below if there is notifications?? */}

              <>
                {this.props.unreadMessageCount > 0 && (
                  <Badge pill className="mb-4 bg-danger" color="primary">
                    {this.props.unreadMessageCount}
                  </Badge>
                )}
              </>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Link to={{ pathname: routes.postItem }}>
                <Button outline color="light">
                  {" "}
                  <MdInsertChart /> Start Sharing
                </Button>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Button outline color="light" id="AboutPopover">
                {" "}
                About <MdArrowDropDown />
              </Button>
            </NavLink>
          </NavItem>

          {!this.props.currentUser && (
            <>
              <NavItem>
                <NavLink>
                  <Link to={{ pathname: routes.registration }}>
                    <Button outline color="light">
                      {" "}
                      <MdExitToApp /> REGISTER
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to={{ pathname: routes.login }}>
                    <Button outline color="light">
                      {" "}
                      <MdExitToApp /> LOGIN
                    </Button>
                  </Link>
                </NavLink>
              </NavItem>
            </>
          )}
          <NavItem>
            <NavLink>
              <Button outline color="light" onClick={this.props.toggle}>
                <MdFilterList />
              </Button>
            </NavLink>
          </NavItem>
          {this.props.currentUser && (
            <NavItem>
              <NavLink id="Popover2">
                <>
                  <div onClick={this.toggleUserCardPopover}>
                    <Avatar
                      className="can-click"
                      src={
                        this.props.currentUser && this.props.currentUser.avatar
                      }
                    />
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom-start"
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
                            <Link to={`/profiles/${this.props.currentUser.id}`}>
                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdPersonPin /> Profile
                              </ListGroupItem>
                            </Link>
                            {/* </Link> */}
                            <Link to={{ pathname: routes.buyAndSell }}>
                              <ListGroupItem
                                tag="button"
                                action
                                className="border-light"
                              >
                                <MdInsertChart /> Activities
                              </ListGroupItem>
                            </Link>
                            <Link to={{ pathname: routes.chat }}>
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
                    </UncontrolledPopover>
                  </div>
                </>
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getUser(state),
  items: getSearchedItems(state),
  loading: getLoading(state),
  unreadMessageCount: getUnreadMessageCount(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   searchItems: (query) => dispatch(searchItems(query)),
// });

export default connect(mapStateToProps, {
  searchItems: (query) => searchItems(query),
  wsConnect,
})(Header);
