import SearchTypes from "./search.types";

export const startedTypingInSearch = search => ({
  type: SearchTypes.STARTED_TYPING_IN_SEARCH,
  search
});
export const gotAutocompleteSuccess = result => ({
  type: SearchTypes.GOT_AUTOCOMPLETE_SUCCESS,
  payload: result
});
export const gotAutocompleteFailure = error => ({
  type: SearchTypes.GOT_AUTOCOMPLETE_FAILURE,
  payload: error
});
