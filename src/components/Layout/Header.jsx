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
  PopoverHeader,
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
  MdList,
} from "react-icons/md";
// import "rsuite/dist/styles/rsuite-default.css";
import Logo from "../../assets/Icons/Logo.svg";
import SharreIt from "../../assets/Icons/Logo2.svg";
import { Link } from "react-router-dom";
import { UserCard } from "../Card";
import routes from "../../config/routes";
// import PageSpinner from "../../components/PageSpinner";
import { getCurrentUser } from "../../store/auth";
import { getLoading, getSearchedItems, searchItems } from "../../store/items";
import FilterComp from "../../pages/allItems/components/filterComp";
import { Drawer } from "rsuite";
import bn from "../../utils/bemnames";
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
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer() {
    this.setState({ show: true });
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
        <Nav navbar>
          <img className="App-logo" alt="" src={Logo} />
        </Nav>
        <Nav navbar>
          <Link to={{ pathname: routes.homePage }}>
            <img className="App-logo2" alt="" src={SharreIt} />
          </Link>
        </Nav>

        <Nav navbar className={bem.e("nav-right")}>
          <NavItem>
            <NavLink>
              <Button outline color="light" id="AboutPopover">
                {" "}
                About <MdArrowDropDown />
              </Button>
            </NavLink>
          </NavItem>
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
          <NavItem>
            <NavLink>
              <Button outline color="light" onClick={this.toggleDrawer}>
                <MdFilterList />
              </Button>
            </NavLink>
          </NavItem>

          <Drawer backdrop={true} show={this.state.show} onHide={this.close}>
            <Drawer.Header>
              <Drawer.Title>
                <MdFilterList size={49} />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <FilterComp />
            </Drawer.Body>
          </Drawer>

          <NavItem>
            <NavLink id="Popover2">
              {/* {this.props.currentUser && ( */}
              <>
                <div onClick={this.toggleUserCardPopover}>
                  <Avatar className="can-click" />
                  <Popover
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
                          {/* <Link to={`/profiles/${this.props.currentUser.id}`}> */}
                          <ListGroupItem
                            tag="button"
                            action
                            className="border-light"
                          >
                            <MdPersonPin /> Profile
                          </ListGroupItem>
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
