import React, { Component } from "react";
import ProductsComp from "../homePage/components/Products";
import Spacer from "../categoriesPage/components/spacer"
import CategoryImageContainer from "../categoriesPage/components/categoryImageContainer";
import PopularAmongUsers from "../homePage/components/PopularAmongUsers";

//load items by subcategory and display

class SelectedCategory extends Component {
    render() {
        const child = { width: `100%`, height: `200px` };
        const parent = { width: `100%`, height: `250px` };

        return (
            <div>
                <div>
            
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
            </div>
            <Spacer title="Search results  " />
                <div style={parent}>
                    <PopularAmongUsers/>
                </div>
            </div >
        );
    }
}

export default SelectedCategory;
