import {createReducer} from "@reduxjs/toolkit";

const cartReducers = createReducer([], (builder)=> {
  builder
    .addCase('CART_ADD', (store, {payload}) => {
      return [...store, payload];
    })
    .addCase('CART_ITEM_PATCH', (store, {payload}) => {
      return [
        ...store.map((item) => {
        if (item.itemId == payload.itemId) {
          return {...item, count: payload.count}
        }
        return item;
      })
    ];
    })
    .addCase('CART_REMOVE', (store, {payload})=> {
      return [...store.filter((item) => item.id !==payload.id)];
    })
    .addCase('CART_REMOVE_ALL', (store, {payload})=> {
      return [];
    })

});

export default cartReducers;