import React from 'react';
import ConversationItem from '../conversation-item/ConversationItem';

const ConversationList = ({ conversations, selectedConversation, onConversationItemSelected }) => {
    const conversationItems = conversations.map((conversation) => {
        const conversationIsActive = selectedConversation && conversation.id === selectedConversation.id;

        return <ConversationItem
            key={conversation.id}
            onConversationItemSelected={onConversationItemSelected}
            isActive={conversationIsActive}
            conversation={conversation} />;
    });

    return (
        <div className="conversation-list bg-gradient-theme-left" >
            {conversationItems}
        </div>
    );
}

export default ConversationList;