import React, { useState } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { Input, Button } from 'reactstrap';

// import './ChatForm.scss';

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = ({ selectedConversation, onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState('');
    const disableButton = isMessageEmpty(textMessage);
    let formContents = null;
    let handleFormSubmit = null;

    if (selectedConversation) {
        formContents = (
            <>
                <div title="Add Attachment">
                    <MdAttachFile size={40} />
                </div>
                <Input
                    type="text"
                    placeholder="type a message"
                    value={textMessage}
                    onChange={(e) => { setTextMessage(e.target.value); }} />
                <Button outline disabled={disableButton}>Send</Button>
            </>
        );

        handleFormSubmit = (e) => {
            e.preventDefault();

            if (!isMessageEmpty(textMessage)) {
                onMessageSubmitted(textMessage);
                setTextMessage('');
            }
        };
    }

    return (
        <form className="chat-form" onSubmit={handleFormSubmit}>
            {formContents}
        </form>
    );
}

export default ChatForm;