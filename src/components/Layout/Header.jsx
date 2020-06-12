import Avatar from "../Avatar";
import SearchInput from "../SearchInput";
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from "reactstrap";
import bn from "../../utils/bemnames";
import Logo from "../../assets/Icons/Logo.svg";
import SharreIt from "../../assets/Icons/Logo2.svg";

const bem = bn.create("header");

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };
  render() {
    const { isNotificationConfirmed } = this.state;
    return (
      <Navbar light expand className={bem.b("bg-white")}>
        <Nav navbar>
          <img className="App-logo" alt="" src={Logo} />
        </Nav>
        <Nav navbar>
          <img className="App-logo2" alt="" src={SharreIt} />
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>

        <Nav navbar className={bem.e("nav-right")}>
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
              <Avatar className="can-click" />
            </NavLink>
            <Popover
              placement="bottom-end"
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light"></PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
