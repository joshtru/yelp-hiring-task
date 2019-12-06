import { all, call, put, takeLatest } from "redux-saga/effects";
// IMPORTING LOCATION ACTION TYPES
import LocationTypes from "./location.types";
// IMPORTING LOCATION ACTIONS
import { getLocationSuccess, getLocationFailure } from "./location.actions";

// CREATE A PROMISE TO EXTRACT LOCATION AND ERROR
const extractUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location),
      error => reject(error)
    );
  });
//   USE SAGA TO DISPATCH LOCATION OUTCOME
export function* getUserLocation() {
  try {
    if (navigator.geolocation) {
      const location = yield call(extractUserLocation);

      yield put(
        getLocationSuccess({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      );
    } else {
      yield put(getLocationFailure("Location unavailable"));
    }
  } catch (error) {
    let receivedError = yield null;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        receivedError = "Location Denied";
        break;
      case error.POSITION_UNAVAILABLE:
        receivedError = "Location unavailable";
        break;
      case error.TIMEOUT:
        receivedError = "timed out";
        break;
      case error.UNKNOWN_ERROR:
        receivedError = "error occured";
        break;
      default:
        receivedError = "No location";
        break;
    }
    yield put(getLocationFailure(receivedError));
  }
}
export function* onGetUserLocation() {
  yield takeLatest(LocationTypes.GET_LOCATION_START, getUserLocation);
}

// EXPORT ALL SAGAS TO WHERE NEEDED LIKE ROOT SAGA
export function* locationSagas() {
  yield all([call(onGetUserLocation)]);
}
