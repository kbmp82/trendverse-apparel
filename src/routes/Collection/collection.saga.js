import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFail,
} from "../../store/collections/collection.action";
import { COLLECTION_ACTION_TYPES } from "../../store/collections/collection.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionsArray = yield call(
      getCollectionsAndDocuments,
      "collections"
    );
    yield put(fetchCollectionsSuccess(collectionsArray));
  } catch (error) {
    yield put(fetchCollectionsFail(error));
  }
}

export function* onFetchCollections() {
  yield takeLatest(
    COLLECTION_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* collectionsSaga() {
  yield all([call(onFetchCollections)]);
}
