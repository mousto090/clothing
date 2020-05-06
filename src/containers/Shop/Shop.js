import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Collection from "../../components/Collection/Collection";
import CollectionOverview from "../../components/Collection/CollectionOverview/CollectionOverview";
import { firebaseDataKeys, firestore } from "../../firebase";
import { shopActions } from "../../store/actions";

const Shop = ({ match, onFetchShopCollectionsSuccess, onFetchShopCollectionsInit }) => {
    useEffect(() => {
        //fetch shop collections data
        const { shopDataCollectionName } = firebaseDataKeys;
        const collectionRef = firestore.collection(shopDataCollectionName)
        onFetchShopCollectionsInit();
        const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshoot => {
            const collections = {};
            snapshoot.docs.forEach(doc => {
                const { title, items } = doc.data();
                const titleLower = title.toLowerCase();
                collections[titleLower] = { id: doc.id, routeName: encodeURI(titleLower), title, items };
            })
            onFetchShopCollectionsSuccess(collections);
        })
        return () => unsubscribeFromSnapshot();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionPath`} component={Collection} />
        </Switch>
    );
}

const mapDispatchToProps = dispatch => ({
    onFetchShopCollectionsInit: () => dispatch(shopActions.fetchShopCollectionsInit()),
    onFetchShopCollectionsSuccess: collections => dispatch(shopActions.fetchShopCollectionsSuccess(collections))
})
export default connect(null, mapDispatchToProps)(Shop);