import React from 'react';
import { connect } from 'react-redux';
import { getMessagesHistory } from "../../../../store/chat"
import Message from '../../components/message/Message';
import './MessageList.scss';
import { getCurrentUser } from "../../../../store/auth";

class MessageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            messageDetails: [],
            messageItems: [],
            isMyMessage: false
        }
    }

    renderMessages = () => {
        const myId = this.props.currentUser ? this.props.currentUser.id : null
        return this.props.messages ? this.props.messages.map((message, i) => {

            return <Message
                key={i}
                avatar={this.props.conversationId ? this.props.conversationId.avatar : null}
                isMyMessage={message.sender === myId ? true : false}
                message={message} />
        }) : null;
    };

    render() {


        return (
            <div id="chat-message-list">
                {this.renderMessages()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { messages: getMessagesHistory(state), currentUser: getCurrentUser(state) }
}



export default connect(mapStateToProps)(MessageList);