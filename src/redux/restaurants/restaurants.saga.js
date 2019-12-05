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

// MAKE API CALL BASED ON AVAILABLE PARAMETER
export function* resolveRouteToYelp(city = null, coords = null) {
  try {
    let response;
    const url = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`;
    const term = "restaurants";
    // IF CITY HAS A VALUE, MAKE API CALL WITH SEARCH VALUE OF CITY
    if (city !== null) {
      response = yield axios.get(url, {
        params: {
          term,
          location: city
        },
        headers: {
          Authorization: `Bearer ${YELP_KEY}`
        }
      });
      // ELSE MAKE API CALL WITH COORDINATES
    } else if (coords !== null) {
      response = yield axios.get(url, {
        params: {
          term,
          latitude: coords.lat,
          longitude: coords.lng
        },
        headers: {
          Authorization: `Bearer ${YELP_KEY}`
        }
      });
    }

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

// GET RESTAURANTS BY SEARCH
export function* getRestaurantsBySearchNearBy({ city }) {
  yield resolveRouteToYelp(city);
}
export function* onGetRestaurantsBySearchNearBy() {
  yield takeLatest(
    RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_SEARCH,
    getRestaurantsBySearchNearBy
  );
}
// GET RESTAURANTS BY COORDINATES
export function* getRestaurantsByCoordsNearBy({ coords }) {
  yield resolveRouteToYelp(coords);
}
export function* onGetRestaurantsByCoordsNearBy() {
  yield takeLatest(
    RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_COORD,
    getRestaurantsByCoordsNearBy
  );
}

// EXPORT ALL GETS WHERE NEEDED LIKE ROOT SAGA
export function* restaurantsSagas() {
  yield all([
    call(onGetRestaurantsBySearchNearBy),
    call(onGetRestaurantsByCoordsNearBy)
  ]);
}
