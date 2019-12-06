import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

// IMPORTING RESTAURANTS ACTION TYPES
import RestaurantsTypes from "./restaurants.types";
import LocationTypes from "../location/location.types";
// IMPORTING RESTAURANTS ACTIONS
import {
  getYelpRestaurantsSuccess,
  getYelpRestaurantsFailure
} from "./restaurants.actions";
// GET API KEYS
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;

// MAKE API CALL BASED ON AVAILABLE PARAMETER
export function* getRestaurantsNearBy({ payload }) {
  try {
    let response;
    const url = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`;
    const term = "restaurants";
    //  MAKE API CALL WITH COORDINATES
    response = yield axios.get(url, {
      params: {
        term,
        latitude: payload.lat,
        longitude: payload.lng
      },
      headers: {
        Authorization: `Bearer ${YELP_KEY}`
      }
    });

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
  yield takeLatest(LocationTypes.SET_COORDINATES, getRestaurantsNearBy);
  yield takeLatest(LocationTypes.GET_LOCATION_SUCCESS, getRestaurantsNearBy);
}

// EXPORT ALL GETS WHERE NEEDED LIKE ROOT SAGA
export function* restaurantsSagas() {
  yield all([call(onGetRestaurantsNearBy)]);
}
