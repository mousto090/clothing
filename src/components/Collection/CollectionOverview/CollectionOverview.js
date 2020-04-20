import React from "react";
import CollectionItems from "../CollectionItems/CollectionItems";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../../store/shop/selectors";
import { connect } from "react-redux";

/**
 * Show all SHOP collections
 */
const CollectionOverview = ({ collections }) => {
    return (
        Object.values(collections).map(({ id, title, items }) => (
            //preview  only 4 items
            <CollectionItems key={id} title={title} items={items.slice(0, 4)} />
        ))
    );
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);