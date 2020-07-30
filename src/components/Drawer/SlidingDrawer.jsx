import React from 'react'
import FilterComp from "../../pages/allItems/components/filterComp";

class SlidingDrawer extends React.Component {
    render() {
        let drawerClasses = 'side-drawer'
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        } return (

            <div className={drawerClasses}>
                <h3>Filter YOur Search Here</h3>
                <FilterComp />
            </div>)
    }

}

export default SlidingDrawer;