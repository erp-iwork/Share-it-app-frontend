import React from 'react';
import { MdList,
} from "react-icons/md";
import Avatar from "../../../../components/Avatar";

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    let chatTitleContents = null;

    if (selectedConversation) {
        chatTitleContents = (
            <>
                <span> <Avatar size={50} /> {selectedConversation.name}</span>
                <div>
                {/* <div onClick={() => { onDeleteConversation(); }} title="Delete Conversation"> */}
                    <MdList />
                </div>
            </>
        );
    }

    return (
        <div className="chat-title">
            {chatTitleContents}
        </div>
    );
}

export default ChatTitle;