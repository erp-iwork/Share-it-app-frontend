import React from 'react';

import './ConversationSearch.scss';



class ConversationSearch extends React.Component {



    render() {
        return (
            <div id="search-container">
                {this.props.conversations ? (<input type="text" placeholder="Search" />) : null}
            </div>
        );
    }
}

export default ConversationSearch;