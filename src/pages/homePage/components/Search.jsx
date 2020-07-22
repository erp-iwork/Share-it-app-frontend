import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'reactstrap';
import SearchImage from "../../../assets/newResources/SearchImage.jpg";
import Divider from "../../../assets/newResources/Dividers.svg";

class HomePageSearch extends Component {
    state = {}
    render() {
        return (
            <>
                <Row>
                    <Col md={5} className='searchImageContainer'>
                        <img src={SearchImage} alt='' />
                    </Col>
                    <Col md={7} align='center' className='searchformLayout'>
                        <h1>
                            <b>SHARE ANYTHING , <div>
                            ANYWHERE ...</div> </b>
                        </h1>
                        <Input placeholder='Search Sharreit ...' className='searchInputHome' />
                        <Col align='right'>
                            <Button size='md' className='buttonPaddingRight'>
                                <i>SEARCH</i>
                            </Button>
                            <b><i>OR</i></b>
                            <Button size='md' outline className='buttonPaddingLeft' color='success'>
                                <i>START SHARING</i>
                            </Button>
                        </Col>
                    </Col>
                </Row>
                <Col align='center'>
                    <img src={Divider} alt='' />
                    <h4>
                        Premium Ads
                    </h4>
                </Col>
            </>
        );
    }
}

export default HomePageSearch;