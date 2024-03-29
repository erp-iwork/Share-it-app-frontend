import React, { Component } from "react";
import WebSocketInstance from "../WebSocket";
import { connect } from "react-redux";
import { getCurrentUser } from "../store/auth";
import {
  Card,
  CardFooter,
  CardHeader,
  Input,
  Button,
  Form,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { MdSend } from "react-icons/md";
import Avatar from "../components/Avatar";
import Chats from "../pages/messages/messages";
import Search from "antd/lib/input/Search";

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    WebSocketInstance.connect();
    console.log("Props");
    console.log(props);
    this.state = {
      message: this.props.location.state.itemTitle
        ? ` Hello There, I am Interested in your ${this.props.location.state.itemTitle} Item \nUrl: localhost:3000/items/${this.props.location.state.id}`
        : "",
      messages: [],
      receiver: this.props.location.state.receiver,
      sender: this.props.currentUser.email,
      twice: true,
    };

    this.waitForSocketConnection(() => {
      WebSocketInstance.initChatUser(this.state.receiver);
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this)
      );
      WebSocketInstance.fetchMessages(this.state.sender, this.state.receiver);
    });
  }

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is made");
        callback();
        return;
      } else {
        console.log("Waiting for connection..");
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  scrollToBottom = () => {
    const chat = this.messagesEnd;
    const scrollHeight = chat.scrollHeight;
    const height = chat.clientHeight;
    const maxScrollTop = scrollHeight - height;
    chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };
  addMessage(message) {
    window.location.reload()
    // this.setState({
    //   messages: [...this.state.messages, message],
    // });
    
    
  }

  setMessages(messages) {
    this.setState({
      messages: messages.reverse(),
    });
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessageHandler = (e, message) => {
    const messageObject = {
      sender: this.state.sender,
      receiver: this.state.receiver,
      message: message,
    };

    WebSocketInstance.newChatMessage(messageObject);

    this.setState({
      message: "",
    });

    e.preventDefault();
  };

  renderMessages = (messages) => {
    const { sender: currentUser } = this.state;
    return messages.map((message, i) => {
      return (
        <li
          key={message.id}
          className={message.sender === currentUser ? "me" : "her"}
        >
          <h4 className="author">{message.sender}</h4>
          <p>{message.message}</p>
        </li>
      );
    });
  };

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.state.messages;
    // if (this.state.receiver !== this.props.match.params.email)
    // window.location.reload();
    if (this.props.location.state.receiver !== this.state.receiver) {
      WebSocketInstance.fetchMessages(
        this.state.sender,
        this.props.location.state.receiver
      );
      this.setState({ receiver: this.props.location.state.receiver });
    }
    // window.location.reload();

    return (
      <Card className="chat">
        <Row>
          <Col md={4}>
            <CardHeader>
              <Search placeholder="search your chats" />
            </CardHeader>
            <CardBody className="chatsScroll">
              <Chats />
            </CardBody>
          </Col>
          <Col md={8}>
            <CardHeader> <Avatar />  {this.state.receiver}</CardHeader>
            <div className="container">
              <ul
                ref={(el) => {
                  this.messagesEnd = el;
                }}
              >
                {messages && this.renderMessages(messages)}
              </ul>
            </div>
            <CardFooter>
              <Form
                id="chat-form"
                onSubmit={(e) => this.sendMessageHandler(e, this.state.message)}
              >
                <Row>
                  <Col>
                    <Input
                      type="text"
                      onChange={this.messageChangeHandler}
                      value={this.state.message}
                      placeholder="Start Typing"
                      required
                    />
                  </Col>
                  <Button type="submit" outline>
                    Send <MdSend color="danger" />
                  </Button>
                </Row>
              </Form>
            </CardFooter>
          </Col>
        </Row>
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, null)(ChatComponent);
