import React, { Component } from "react";
import {
  Button, Card, CardBody, CardHeader, Col,
  Form, FormGroup, Input, Row, CardFooter,
} from "reactstrap";
import { MdStar } from "react-icons/md";
import { Reviews } from ".";
import { getCurrentUser } from "../../../store/auth";

class RatingsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: false,
    };
  }

  rate = () => {
    const rate = !this.state.rate;
    this.setState({
      rate,
    });
  };
  render() {
    const { rate } = this.state;
    return (
      <Card className="ratingContainer">
        <CardHeader color="success">
          <Row>
            <Col>Ratings For John Doe</Col>
            <Button onClick={() => this.rate()} size="sm">
              Rate
            </Button>
          </Row>
        </CardHeader>
        <CardBody>
          {rate ? (
            <>
              <Form>
                <FormGroup>
                  <Col sm={12} align="center">
                    <MdStar className="zoomstar" fontSize={30} />
                    <MdStar className="zoomstar" fontSize={30} />
                    <MdStar className="zoomstar" fontSize={30} />
                    <MdStar className="zoomstar" fontSize={30} />
                    <MdStar className="zoomstar" fontSize={30} />
                    <MdStar className="zoomstar" fontSize={30} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm={12}>
                    <Input placeholder="Header" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={12}>
                    <Input
                      type="textarea"
                      placeholder="Description (Optional)"
                    />
                  </Col>
                </FormGroup>
                <FormGroup align="center">
                  <Button color="success" outline block>
                    Submit
                  </Button>
                </FormGroup>
              </Form>
              <hr />
            </>
          ) : null}
          <Col>
            {/* <Reviews /> */}
            <Reviews />
          </Col>
        </CardBody>
        <CardFooter align='center'>
          <Button outline size='sm'>
            Show More
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps=(state)=>({
  currentUser:getCurrentUser(state)
})

export default  RatingsComp;
