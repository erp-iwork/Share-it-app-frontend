import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ConversationSearch from "../../components/conversation/conversation-search/ConversationSearch";
import NoConversations from "../../components/conversation/no-conversations/NoConversations";
import ConversationList from "../../components/conversation/conversation-list/ConversationList";
import NewConversation from "../../components/conversation/new-conversation/NewConversation";
import ChatTitle from "../../components/chat-title/ChatTitle";
import MessageList from "../../containers/message/MessageList";
import ChatForm from "../../components/chat-form/ChatForm";
import { getCurrentUser } from "../../../../store/auth";
import {
  loadConversations,
  messagesRequested,
  getConversations,
  getSelectedConversation,
  conversationChanged,
  sendMessage,
} from "../../../../store/chat";
import { wsConnect } from "../../../../store/websocket";
import { chatApi } from "../../../../store/chat-api";
class ChatShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      selectedConversationId: "",
    };
  }

  componentDidMount() {
    this.props.wsConnect(chatApi);
    if (this.props.currentUser) {
      console.log("this.props.currentUser");
      console.log(this.props.currentUser);
      this.setState({
        sender: this.props.currentUser ? this.props.currentUser.id : null,
      });
      this.props.loadConversations(this.props.currentUser.id);
    }
  }

  onMessageSubmitted = (text) => {
    const messageObject = {
      command: "new_message",
      sender: this.state.sender,
      receiver: this.props.selectedConversation.id,
      message: text,
    };

    this.props.sendMessage(messageObject);
  };
  conversationContent = () => {
    if (this.props.selectedConversation) {
      return <MessageList conversationId={this.props.selectedConversation} />;
    } else {
      return <NoConversations></NoConversations>;
    }
  };
  conversationChanged = (id) => {
    this.props.conversationChanged(id);
    this.props.messagesRequested(this.state.sender, id);
  };
  render() {
    if (!this.props.currentUser) {
      return <Redirect path="/login" />;
    }
    const conversations = this.props.conversations;
    const selectedConversation = this.props.selectedConversation;
    return (
      <div className="chat-container">
        <ConversationSearch conversations={conversations} />
        <ConversationList
          onConversationItemSelected={this.conversationChanged}
          conversations={conversations}
          selectedConversation={this.props.selectedConversation}
        />
        <NewConversation />
        <ChatTitle
          selectedConversation={this.props.selectedConversation}
          onDeleteConversation={this.props.onDeleteConversation}
        />
        {this.conversationContent()}
        {selectedConversation ? (
          <ChatForm
            selectedConversation={selectedConversation}
            onMessageSubmitted={this.onMessageSubmitted}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  conversations: getConversations(state),
  selectedConversation: getSelectedConversation(state),
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, {
  loadConversations,
  conversationChanged,
  messagesRequested,
  sendMessage,
  wsConnect,
})(ChatShell);
