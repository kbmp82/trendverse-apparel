import { createSelector } from "reselect";

const selectCollectionsReducer = (state) => state.collections;

const selectCollections = createSelector(
  [selectCollectionsReducer],
  (collectionsSlice) => collectionsSlice.collections
);

export const getCollections = createSelector(
  [selectCollections],
  (collections) => {
    return collections.reduce((acc, collection) => {
      const { title, items } = collection;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCollectionsIsLoading = createSelector(
  [selectCollectionsReducer],
  (collectionsSlice) => collectionsSlice.isLoading
);
