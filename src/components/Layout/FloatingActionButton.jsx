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
  MdCallMissedOutgoing,
} from "react-icons/md";

class FloatingActionButton extends Component {
  state = {};
  render() {
    return (
      <Container className="floatingActionContainer">
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Create note link"
        >
          <MdAccessAlarms size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Profile"
        >
          <MdAccessAlarms size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Create note link"
        >
          <MdAccessAlarms size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Add user link"
        >
          <MdAccessAlarms size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Create note link"
        >
          <MdAccessAlarms size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Add user link"
        >
          <MdCallMissedOutgoing size={20} />
        </Link>
        <Link
          styles={{
            backgroundColor: lightColors.lightBlue,
            color: darkColors.white,
          }}
          tooltip="Settings"
        >
          <MdSettings size={20} />
        </Link>
        <Link
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
