import types from "./types";

const {ADD_ITEM} = types;
export const addItem = (item) => ({
    type: ADD_ITEM,
    item
})