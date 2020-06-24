import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { conversationChanged, newMessageAdded, conversationDeleted, conversationsRequested } from '../../store/actions/index';
import ConversationSearch from '../../conversation/conversation-search/ConversationSearch';
import ConversationList from '../../conversation/conversation-list/ConversationList';
import NewConversation from '../../conversation/new-conversation/NewConversatin';
import ChatTitle from '../../chat-title/ChatTitle';
import MessageList from '../message/MessageList';
import ChatForm from '../../chat_form/Chat-form';
import NoConversations from '../../conversation/no-conversation/NoConversation';

import './ChatMain.scss';

const ChatMain = ({ 
    conversations, 
    selectedConversation, 
    conversationChanged,
    onMessageSubmitted,
    onDeleteConversation,
    loadConversations
}) => {
    useEffect(() => {
        loadConversations();
    }, [loadConversations]);

    let conversationContent = (
        <>
            <NoConversations></NoConversations>
        </>
    );

    if (conversations.length > 0) {
        conversationContent = (
            <>
                <MessageList conversationId={selectedConversation.id} />
            </>
        );
    }

    return (
        <div id="chat-container">
            <ConversationSearch conversations={conversations} />
            <ConversationList
                onConversationItemSelected={conversationChanged}
                conversations={conversations}
                selectedConversation={selectedConversation} />
            <NewConversation />
            <ChatTitle 
                selectedConversation={selectedConversation}
                onDeleteConversation={onDeleteConversation} />
            {conversationContent}
            <ChatForm 
                selectedConversation={selectedConversation}
                onMessageSubmitted={onMessageSubmitted} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        conversations: state.conversationState.conversations,
        selectedConversation: state.conversationState.selectedConversation
    };
};
  
const mapDispatchToProps = dispatch => ({
    conversationChanged: conversationId => dispatch(conversationChanged(conversationId)),
    onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText)); },
    onDeleteConversation: () => { dispatch(conversationDeleted()); },
    loadConversations: () => { dispatch(conversationsRequested())}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatMain);