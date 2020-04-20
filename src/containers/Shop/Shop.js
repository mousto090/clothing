import React from "react";
import Collection from "../../components/Collection/Collection";
import { Route, Switch } from "react-router-dom";
import CollectionOverview from "../../components/Collection/CollectionOverview/CollectionOverview";


const Shop = ({match}) => {
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionPath`} component={Collection}/>
        </Switch>
    );
}


export default Shop;