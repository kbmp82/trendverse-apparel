import { COLLECTION_ACTION_TYPES } from "./collection.types";

export const COLLECTIONS_INITIAL_STATE = {
  collections: [],
  isLoading: false,
  erorr: null,
};

export const collectionsReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START:
      return { ...state, isLoading: true };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: payload, isLoading: false };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL:
      return { ...state, payload, isLoading: false };
    default:
      return state;
  }
};
