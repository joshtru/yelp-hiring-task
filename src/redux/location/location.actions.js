import LocationTypes from "./location.types";

// GET USER LOCATION ACTIONS
export const getLocationStart = () => ({
  type: LocationTypes.GET_LOCATION_START
});
export const getLocationSuccess = location => ({
  type: LocationTypes.GET_LOCATION_SUCCESS,
  payload: location
});
export const getLocationFailure = error => ({
  type: LocationTypes.GET_LOCATION_FAILURE,
  payload: error
});
// SET USER'S CITY
export const setUserCity = city => ({
  type: LocationTypes.SET_CITY,
  payload: city
});
// SET USER'S COORDINATES
export const setUserCoordinates = coords => ({
  type: LocationTypes.SET_COORDINATES,
  payload: coords
});
