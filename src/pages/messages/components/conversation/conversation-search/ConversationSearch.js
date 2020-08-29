import React from 'react';
import { Input } from 'reactstrap';

class ConversationSearch extends React.Component {
    render() {
        return (
            <div className="search-container">
                {this.props.conversations ? (
                <Input type="text" placeholder="Search ... " />
                ) : null}
            </div>
        );
    }
}

export default ConversationSearch;