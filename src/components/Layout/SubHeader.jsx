import React from "react";
import { Col, Row, Button } from "reactstrap";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
import { MdList } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

//load categories

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <div className="bg-gradient-theme-right">
        <hr className="divider" />
        <Row align="right" className="subHeaderContainer">
          <Col>
            <Link to={{ pathname: routes.categories }}>
              <Button outline color="light" id="ProductPopver">
                {" "}
                Product Sharing <MdList className="ml-2" />
              </Button>
            </Link>

            <Link to={{ pathname: routes.categories }}>
              <Button
                outline
                color="light"
                id="ServicePopover"
                className="subHeaderButtons"
              >
                {" "}
                Service Sharing <MdList className="ml-2" />
              </Button>
            </Link>

            <Link to={{ pathname: routes.categories }}>
              <Button outline id="DigitalPopover" color="light">
                {" "}
                Digital Sharing <MdList className="ml-2" />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
