import { all, call } from "redux-saga/effects";
import { collectionsSaga } from "../routes/Collection/collection.saga";
import { userSaga } from "./user/user.saga";
//generator function
export function* rootSaga() {
  yield all([call(collectionsSaga), call(userSaga)]);
}
