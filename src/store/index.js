import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./reducers/cartReducers";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    clothing: clothingReducer,
    favorites: favoritesReducer,
    cart: cartReducers,
    // count: countReducer,

  },
});

export default store;

