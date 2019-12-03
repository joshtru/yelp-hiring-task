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
