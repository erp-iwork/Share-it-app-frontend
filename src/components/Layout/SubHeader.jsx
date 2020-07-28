import React from "react";
import { Row, Button } from "reactstrap";
import { getCategories, loadCategories } from "../../store/categories";
import { connect } from "react-redux";
import { MdList } from "react-icons/md";
import { Link } from "react-router-dom";
// import routes from "../../config/routes";
// import { categories } from "../../pages/categoriesPage/categories";

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
          {this.props.categories.map((category) => (
            <div key={category.id} className='ml-2'>
              <Link to={`/categories/${category.id}`}>
                <Button outline color="light" id="ProductPopver">
                  {" "}
                  {category.name} Sharing <MdList className="ml-2" />
                </Button>
              </Link>{" "}
            </div>
          ))}
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
