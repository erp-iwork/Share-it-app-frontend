import React, { Component } from "react";
import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import {
  MdAccessAlarms,
  MdPerson,
  MdSettings,
  MdLocalActivity,
  MdVpnLock,
  MdInput,
} from "react-icons/md";
import routes from "../../config/routes";

class FloatingActionButton extends Component {
  state = {};
  render() {
    return (
      <Container className="floatingActionContainer">
        <Link
          href={routes.registration}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Registration"
        >
          <MdVpnLock size={20} />
        </Link>
        <Link
          href={routes.login}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Login"
        >
          <MdInput size={20} />
        </Link>
        <Link
          href={routes.buyAndSell}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Activities"
        >
          <MdLocalActivity size={20} />
        </Link>

        <Link
          href={routes.settings}
          to={{ pathname: routes.settings }}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Settings"
        >
          <MdSettings size={20} />
        </Link>
        <Link
          href={routes.profile}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Profile"
        >
          <MdPerson size={20} />
        </Link>

        <Button
          className="floatingActionButton"
          rotate={false}
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: lightColors.white,
          }}
        >
          <MdAccessAlarms size={40} />
        </Button>
      </Container>
    );
  }
}

export default FloatingActionButton;
