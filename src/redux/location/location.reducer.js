import LocationTypes from "./location.types";

const INITIAL_STATE = {
  gettingLocation: false,
  coordinates: null,
  city: "",
  error: null
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET LOCATION REDUCERS
    case LocationTypes.GET_LOCATION_START:
      return {
        ...state,
        gettingLocation: true
      };
    case LocationTypes.GET_LOCATION_SUCCESS:
      return {
        ...state,
        coordinates: action.payload,
        gettingLocation: false,
        error: null
      };
    case LocationTypes.SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case LocationTypes.SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload
      };
    case LocationTypes.GET_LOCATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingLocation: false
      };

    default:
      return state;
  }
};

export default locationReducer;
