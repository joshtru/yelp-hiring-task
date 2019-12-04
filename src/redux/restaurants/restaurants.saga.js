import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

// IMPORTING RESTAURANTS ACTION TYPES
import RestaurantsTypes from "./restaurants.types";
// IMPORTING RESTAURANTS ACTIONS
import {
  getYelpRestaurantsSuccess,
  getYelpRestaurantsFailure
} from "./restaurants.actions";
// GET API KEYS
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;

export function* getRestaurantsNearBy({ city }) {
  try {
    const response = yield axios.get(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`,
      {
        params: {
          term: "restaurants",
          location: city
          // latitude: userLat,
          // longitude: userLong
        },
        headers: {
          Authorization: `Bearer ${YELP_KEY}`
        }
      }
    );
    if (response.status === 200) {
      yield put(getYelpRestaurantsSuccess(response.data));
    } else {
      yield put(getYelpRestaurantsFailure(response));
    }
    console.log(response);
  } catch (error) {
    yield put(getYelpRestaurantsFailure(error));
  }
}
export function* onGetRestaurantsNearBy() {
  yield takeLatest(
    RestaurantsTypes.GET_YELP_RESTAURANTS_START,
    getRestaurantsNearBy
  );
}

// EXPORT ALL GETS WHERE NEEDED LIKE ROOT SAGA
export function* restaurantsSagas() {
  yield all([call(onGetRestaurantsNearBy)]);
}
