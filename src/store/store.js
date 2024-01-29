import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //only persist the cart
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log(
    "type",
    action.type,
    "payload",
    action.payload,
    "currentState",
    store.getState()
  );

  next(action);

  console.log("next state", store.getState());
};

const middleWares = [
  process.env.NODE_ENV === "development" && loggerMiddleware,
  thunk,
].filter(Boolean); //only display logs during development

const composeEnhancer =
  (process.env.NODE_ENV === "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);