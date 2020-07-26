import React, { Component } from "react";
import CategoryCard from "./components/subCategoryCard";
import HorizontalScroll from "react-scroll-horizontal";
import Spacer from "./components/spacer";
import CategoryImageContainer from "./components/categoryImageContainer";

//load items by subcategory and display

class index extends Component {
  render() {
    const child = { width: `100%`, height: `200px` };
    const parent = { width: `100%`, height: `250px` };

    return (
      <>
        <CategoryImageContainer title="Walla" />
        <Spacer title="Sub-Categories " />
        <div style={parent}>
          <HorizontalScroll
            config={{ stiffness: 50, damping: 20 }}
            animValues={10}
            reverseScroll={false}
          >
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
            <CategoryCard style={child} />
          </HorizontalScroll>
        </div>
        <Spacer title="Suggested items" />
      </>
    );
  }
}

export default index;
