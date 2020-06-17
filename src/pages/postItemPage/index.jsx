import React, { Component } from 'react';
import PostItemForm from './components/postItem';

class PostItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <PostItemForm />
         );
    }
}
 
export default PostItemPage;