import { createSelector } from "reselect";

export const selectSearch = state => state.search;

export const selectStartedTyping = createSelector(
  selectSearch,
  search => search.startedTyping
);

export const selectSearchResult = createSelector(
  selectSearch,
  search => search.searchResult
);
