import { all, put, call, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

// IMPORTING RESTAURANTS ACTION TYPES
import RestaurantsTypes from "./restaurants.types";
import LocationTypes from "../location/location.types";
// IMPORTING RESTAURANTS ACTIONS
import {
  getYelpRestaurantsStart,
  getYelpRestaurantsSuccess,
  getYelpRestaurantsFailure
} from "./restaurants.actions";
// GET API KEYS
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;

// MAKE API CALL BASED ON AVAILABLE PARAMETER
export function* getRestaurantsNearBy({ payload }) {
  yield put(getYelpRestaurantsStart());
  try {
    let response;
    const url = yield `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`;
    const term = yield "restaurants";
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
  } catch (error) {
    yield put(getYelpRestaurantsFailure(error));
  }
}

export function* onGetRestaurantsNearBy() {
  yield takeLatest(LocationTypes.SET_COORDINATES, getRestaurantsNearBy);
  yield takeLatest(LocationTypes.GET_LOCATION_SUCCESS, getRestaurantsNearBy);
}

export function* getRestaurantsByCity() {
  try {
    const location = yield select();
    const {
      location: { city }
    } = location;
    if (city !== "") {
      let response;
      const url = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`;
      const term = "restaurants";
      //  MAKE API CALL WITH COORDINATES
      response = yield axios.get(url, {
        params: {
          term,
          location: city
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
    }
  } catch (error) {
    yield put(getYelpRestaurantsFailure(error));
  }
}

export function* onGetRestaurantsByCity() {
  yield takeLatest(
    RestaurantsTypes.GET_YELP_RESTAURANTS_BY_CITY_START,
    getRestaurantsByCity
  );
}

// EXPORT ALL GETS WHERE NEEDED LIKE ROOT SAGA
export function* restaurantsSagas() {
  yield all([call(onGetRestaurantsNearBy), call(onGetRestaurantsByCity)]);
}
