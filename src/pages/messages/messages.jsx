import React from "react";
import { Row, Badge, Card, CardBody } from "reactstrap";
import { getMessages, loadMessages } from "../../store/messages";
import { connect } from "react-redux";
import { getCurrentUser } from "../../store/auth";
// import { message } from "antd";
import _ from "lodash";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

class Messages extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    // const currentUserEmail = this.props.currentUser.email;
    let users = _.uniqBy(this.props.messages, "id");

    users = users.filter(
      (user) => user.id !== this.props.currentUser.id && user.name !== ""
    );
    console.log(users);

    //     let userMessages = this.props.messages.filter(message=>message.sender.email===currentUserEmail)
    //   let newMessages = userMessages.map(message=>message.receiver.name)
    //   console.log(newMessages);
    //   userMessages = _.uniqBy(userMessages, 'receiver.name')
    //   console.log(userMessages)

    return (
      <div>
        {users.map((user) => (
          <Link
            to={{
              pathname: "/chat/" + user.email,
              state: { receiver: user.email },
            }}
          >
            {" "}
            <div className="zoom">
              <Card className="chatlist">
                <CardBody>
                  <Row>
                    <div className="chatListPadding">
                      <Avatar size={40} />
                    </div>
                    <div className="chatListPaddingName">{user.name}</div>
                    <div>
                      <Badge color="danger">1</Badge>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: getMessages(state),
  currentUser: getCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(loadMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
