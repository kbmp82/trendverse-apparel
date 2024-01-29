import { COLLECTION_ACTION_TYPES } from "./collection.types";

export const COLLECTIONS_INITIAL_STATE = {
  collections: [],
};

export const collectionsReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case COLLECTION_ACTION_TYPES.SET_COLLECTIONS:
      return { ...state, collections: payload };
    default:
      return state;
  }
};
