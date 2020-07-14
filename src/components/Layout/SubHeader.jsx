import React from "react";
import { Card, Col, Row, Button } from "reactstrap";
import routes from "../../config/routes";
import { Link } from "react-router-dom";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
//load categories
class SubHeader extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <Card className="mainPadding" align="center">
        <Row>
          {this.props.categories.map((category) => (
            <Col md={3} xs={12} sm={6} key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <Button outline block>
                  {category.name} Sharing
                </Button>
              </Link>
            </Col>
          ))}
          <Col md={3} xs={12} sm={6}>
            <Button onClick={() => alert("Digoma")} block color="success">
              Donations
            </Button>
          </Col>
        </Row>
      </Card>
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
