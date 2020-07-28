import React from 'react';
import classNames from 'classnames';
import { formatter } from "../../date-formatter/dateformatter"
import './ConversationItem.scss';


const ConversationItem = ({ conversation, isActive, onConversationItemSelected }) => {

    const className = classNames('conversation', {
        'active': isActive
    });

    return (
        <div className={className} onClick={() => onConversationItemSelected(conversation.id)}>
            <img src={"http://0.0.0.0:9000" + conversation.avatar} alt={conversation.imageAlt} />
            <div className="title-text">{conversation.name} <span className="unread"> {conversation.unread > 0 ? conversation.unread : null}</span>{conversation.timestamp}</div>
            <div className="created-date">{conversation.last_message ? formatter.format(Date.parse(conversation.last_message.timestamp)) : null}</div>
            <div className="conversation-message">
                {conversation.last_message ? conversation.last_message.message : null}
            </div>
        </div>
    );
}

export default ConversationItem;