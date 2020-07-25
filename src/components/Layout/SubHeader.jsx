import React from "react";
import { Card, Col, Row, Button, NavLink, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
//load categories

class SubHeader extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <div className="bg-gradient-theme-right">
        <Row className="nav-right">
          <NavItem>
            <NavLink>
              <Button outline color="light">
                {" "}
                PRODUCT SHARING <MdArrowDropDown />
              </Button>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Button outline color="light">
                {" "}
                SERVICE SHARING <MdArrowDropDown />
              </Button>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Button outline color="light">
                {" "}
                DIGITAL SHARING <MdArrowDropDown />
              </Button>
            </NavLink>
          </NavItem>
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
