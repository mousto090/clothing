import types from "./types";
const {FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_INIT} = types;

export const fetchShopCollectionsInit = () => ({type: FETCH_COLLECTIONS_INIT})
export const fetchShopCollectionsSuccess = (collections) => ({type: FETCH_COLLECTIONS_SUCCESS, collections})