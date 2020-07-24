import React, { Component } from "react";
import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import { MdAccessAlarms } from "react-icons/md";

class FloatingActionButton extends Component {
  state = {};
  render() {
    return (
      <Container className="floatingActionContainer">
        <Link className='floatingActionButtonLinks' href="#" tooltip="Create note link">
          <MdAccessAlarms color="#000000" size={20} />
        </Link>
        <Link href="#" tooltip="Add user link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Create note link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Add user link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Create note link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Add user link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Create note link">
          <MdAccessAlarms size={20} />
        </Link>
        <Link href="#" tooltip="Add user link">
          <MdAccessAlarms size={20} />
        </Link>

        <Button
          className="floatingActionButton"
          tooltip="Categories"
          rotate={true}
          //   onClick={() => alert("FAB Rocks!")}
          styles={{
            backgroundColor: darkColors.white,
            color: lightColors.lightBlue,
          }}
        >
          <MdAccessAlarms size={40} />
        </Button>
      </Container>
    );
  }
}

export default FloatingActionButton;
