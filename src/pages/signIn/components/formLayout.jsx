import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Logo from "../../../assets/Icons/CLogo.svg";


class FormLayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Col>
                    <img className='CLogo' src={Logo} alt='' />
                </Col>
            </div>
         );
    }
}
 
export default FormLayoutPage;