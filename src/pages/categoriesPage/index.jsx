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
        <CategoryImageContainer
          title="Electronics"
          description="Electronic devices are components for controlling 
          the flow of electrical currents for the purpose of 
          information processing and system control. Prominent 
          examples include transistors and diodes. Electronic devices 
          are usually small and can be grouped together into packages called 
          integrated circuits.
        "
        />
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
      </>
    );
  }
}

export default index;
