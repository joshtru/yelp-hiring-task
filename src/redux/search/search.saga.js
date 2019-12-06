import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
// IMPORTING SEARCH TYPES
import { SearchTypes } from "./search.types";
// IMPORTING SEARCH ACTIONS
import {
  gotAutocompleteSuccess,
  gotAutocompleteFailure
} from "./search.action";
// IMPORTING YELP API KEY
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;
export function* startedTyping({ text }) {
  try {
    let response;
    const url = yield `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/autocomplete?`;
    response = yield axios.get(url, {
      params: {
        text
      },
      headers: {
        Authorization: `Bearer ${YELP_KEY}`
      }
    });
    if (response.status === 200) {
      yield put(gotAutocompleteSuccess(response.data));
    } else {
      yield put(gotAutocompleteFailure(response));
    }
  } catch (error) {
    yield put(gotAutocompleteFailure(error));
  }
}
export function* onStartedTyping() {
  yield takeLatest(SearchTypes.STARTED_TYPING_IN_SEARCH, startedTyping);
}

export function* searchSagas() {
  yield all([call(onStartedTyping)]);
}
