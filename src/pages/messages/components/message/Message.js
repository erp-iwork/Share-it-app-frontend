import React from 'react';
import classNames from 'classnames';
import { formatter } from "../date-formatter/dateformatter"

const Message = ({ avatar, isMyMessage, message }) => {
    const messageClass = classNames('message-row', {
        'you-message': isMyMessage,
        'other-message': !isMyMessage
    });


    const imageThumbnail = isMyMessage ? null : <img src={"http://0.0.0.0:9000" + avatar} alt={message.imageAlt} onClick={() => alert("profile page link")} />;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {message.message}
                </div>
                <div className="message-time">{formatter.format(Date.parse(message.timestamp))}</div>
            </div>
        </div>
    );
}

export default Message;