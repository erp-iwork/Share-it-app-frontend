import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { connect } from "react-redux";
import { Nav, Navbar, NavItem, NavLink, Row, Col, Button } from "reactstrap";
import { MdExitToApp, MdFilterList, MdArrowDropDown } from "react-icons/md";
import bn from "../../utils/bemnames";
import Logo from "../../assets/Icons/Logo.svg";
import SharreIt from "../../assets/Icons/Logo2.svg";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import { getCurrentUser } from "../../store/auth";
import { getLoading, getSearchedItems, searchItems } from "../../store/items";
import { Drawer } from "rsuite";
import FilterComp from "../../pages/allItems/components/filterComp";
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
      show: false,
      backdrop: true,
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

  logout = () => {
    localStorage.clear();
    window.location = routes.homePage;
  };

  render() {
    // const isDesktop = this.state.isDesktop;

    // const { isNotificationConfirmed } = this.state;
    const { backdrop } = this.state;

    return (
      <Navbar light className="bg-gradient-theme-right">
        <Col className="headerLogoContainer">
          <Nav navbar>
            <img className="App-logo" alt="" src={Logo} />
          </Nav>
          <Nav navbar>
            <Link to={{ pathname: routes.homePage }}>
              <img className="App-logo2" alt="" src={SharreIt} />
            </Link>
          </Nav>
        </Col>
        <Col></Col>
        <Nav navbar>
          <Col>
            <Row className="nav-right">
              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    About <MdArrowDropDown />
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    <MdExitToApp /> REGISTER
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    <MdExitToApp /> LOGIN
                  </Button>
                </NavLink>
              </NavItem>

              {/* <NavItem className="d-inline-flex">
                <NavLink className="position-relative">
                  <MdNotificationsNone
                    size={25}
                    className="text-light can-click"
                  />
                </NavLink>
              </NavItem> */}

              {/* <NavItem>
                <NavLink id="Popover2">
                  <div onClick={this.toggleUserCardPopover}>
                    <Avatar className="can-click" />
                  </div>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink id="Popover2">
                  <Button outline color="light" onClick={this.toggleDrawer}>
                    <MdFilterList />
                  </Button>
                </NavLink>
              </NavItem>
              <Drawer
                backdrop={true}
                show={this.state.show}
                onHide={this.close}
              >
                <Drawer.Header>
                  <Drawer.Title>
                    <MdFilterList size={49} />
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  {/* <Paragraph /> */}
                  <FilterComp />
                </Drawer.Body>
              </Drawer>
            </Row>
            <hr className="divider" />
            <Row>
              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    PRODUCT SHARING <MdArrowDropDown />
                  </Button>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    SERVICE SHARING <MdArrowDropDown />
                  </Button>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Button outline color="light">
                    {" "}
                    DIGITAL SHARING <MdArrowDropDown />
                  </Button>
                </NavLink>
              </NavItem>
            </Row>
          </Col>
        </Nav>
        <hr />
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
