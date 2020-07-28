import React from 'react';
import { Button  } from "reactstrap";

import './NewConversation.scss';

const NewConversation = () => {
    return (
        <div id="new-message-container">
            <Button outline color='light'>Invite A Friend</Button>
        </div>
    );
}

export default NewConversation;