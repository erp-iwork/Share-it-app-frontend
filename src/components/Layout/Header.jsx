import Avatar from "../Avatar";
import SearchInput from "../SearchInput";
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
  Button,
  ListGroupItem,
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
          <Nav navbar>
            <SearchInput />
          </Nav>
        ) : null}

        <Nav navbar className={bem.e("nav-right")}>
          {this.props.currentUser ? (
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
          ) : (
            <NavItem>
              <Link to={{ pathname: "/login" }}>
                <NavLink>
                  <Button>
                    {" "}
                    <MdExitToApp /> Share
                  </Button>
                </NavLink>
              </Link>
            </NavItem>
          )}

          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
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
                  <Avatar
                    onClick={this.toggleUserCardPopover}
                    className="can-click"
                  />
                </>
              )}
              {!this.props.currentUser && (
                <Link to={{ pathname: "/login" }}>
                  <Button>Login</Button>
                </Link>
              )}
            </NavLink>
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

                    <ListGroupItem tag="button" action className="border-light">
                      <MdInsertChart /> Wish List
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdMessage /> Messages
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdSettingsApplications /> Settings
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
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
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, null)(Header);
