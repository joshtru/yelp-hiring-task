import SearchTypes from "./search.types";

const INITIAL_STATE = {
  startedTyping: false,
  searchResult: null,
  error: null
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchTypes.STARTED_TYPING_IN_SEARCH:
      return {
        ...state,
        startedTyping: true
      };
    case SearchTypes.GOT_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        searchResult: action.payload,
        startedTyping: false,
        error: null
      };
    case SearchTypes.GOT_AUTOCOMPLETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        startedTyping: false
      };

    default:
      return state;
  }
};

export default SearchReducer;
