import React from "react";
import classes from "./Shop.module.scss";
import Collection from "../../components/Collection/Collection";
import { SHOP_COLLECTIONS } from "../../data/shopData";

const Shop = () => {
    return (
        <div className={classes.shop}>
            {
                SHOP_COLLECTIONS.map(collection => (
                    <Collection key={collection.id} title={collection.title} items={collection.items} />
                ))
            }
        </div>
    );
}


export default Shop;