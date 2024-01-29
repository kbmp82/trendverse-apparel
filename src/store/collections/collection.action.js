import { createAction } from "../../utils/firebase/reducer.utils";
import { COLLECTION_ACTION_TYPES } from "./collection.types";

export const setCollections = (collectionsArray) =>
  createAction(COLLECTION_ACTION_TYPES.SET_COLLECTIONS, collectionsArray);
