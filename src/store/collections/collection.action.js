import { createAction } from "../../utils/firebase/reducer.utils";
import { COLLECTION_ACTION_TYPES } from "./collection.types";
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCollections = (collectionsArray) =>
  createAction(COLLECTION_ACTION_TYPES.SET_COLLECTIONS, collectionsArray);

export const fetchCollectionsStart = () =>
  createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = (collectionsArray) =>
  createAction(
    COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
    collectionsArray
  );

export const fetchCollectionsFail = (error) => {
  createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_FAIL, error);
};

// export const fetchCollectionsAsync = () => async (dispatch) => {
//   dispatch(fetchCollectionsStart());
//   try {
//     const collectionsArray = await getCollectionsAndDocuments("collections");
//     dispatch(fetchCollectionsSuccess(collectionsArray));
//   } catch (error) {
//     dispatch(fetchCollectionsFail(error));
//   }
// };
