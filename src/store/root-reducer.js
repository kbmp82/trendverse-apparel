import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { collectionsReducer } from "./collections/collection.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  cart: cartReducer,
});
