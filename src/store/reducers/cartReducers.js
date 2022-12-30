import {createReducer} from "@reduxjs/toolkit";

const cartReducers = createReducer([], (builder)=> {
  builder
    .addCase('CART_ADD', (store, {payload}) => {
      return [...store, payload];
    })
    .addCase('FAVORITES_REMOVE', (store, {payload})=> {
      const data = store.filter((item) => item.id !==payload.id)
      return data;
    });

});

export default cartReducers;