import LocationTypes from "../location.types";
import locationReducer from "../location.reducer";

const INITIAL_STATE = {
  gettingLocation: false,
  coordinates: { lat: 0.0, lng: 0.0 },
  city: "",
  error: null
};

describe("Location Reducer", () => {
  // DEFAULT STATE RETURN
  test("Should return the intial state", () => {
    expect(locationReducer(INITIAL_STATE, {})).toEqual({
      gettingLocation: false,
      coordinates: { lat: 0.0, lng: 0.0 },
      city: "",
      error: null
    });
  });
  //   GET LOCATION START
  test("Should return true for getting location", () => {
    expect(
      locationReducer(INITIAL_STATE, {
        type: LocationTypes.GET_LOCATION_START
      })
    ).toEqual({
      coordinates: { lat: 0.0, lng: 0.0 },
      city: "",
      error: null,
      gettingLocation: true
    });
  });
  //   GET LOCATION SUCCESS
  test("Should return different coordinates than initial coordinates", () => {
    expect(
      locationReducer(INITIAL_STATE, {
        type: LocationTypes.GET_LOCATION_SUCCESS,
        payload: { lat: 3.444, lng: 5.456 }
      })
    ).toEqual({
      coordinates: { lat: 3.444, lng: 5.456 },
      city: "",
      error: null,
      gettingLocation: false
    });
  });
  //   SET CITY
  test("Should return city name", () => {
    expect(
      locationReducer(INITIAL_STATE, {
        type: LocationTypes.SET_CITY,
        payload: "city on earth"
      })
    ).toEqual({
      coordinates: { lat: 0.0, lng: 0.0 },
      city: "city on earth",
      error: null,
      gettingLocation: false
    });
  });
  //   SET USER COORDINATES
  test("Should return dirrent coordinates", () => {
    expect(
      locationReducer(INITIAL_STATE, {
        type: LocationTypes.SET_COORDINATES,
        payload: { lat: 3.444, lng: 4.0345 }
      })
    ).toEqual({
      coordinates: { lat: 3.444, lng: 4.0345 },
      city: "",
      error: null,
      gettingLocation: false
    });
  });
  //   GET LOCATION FAILURE
  test("Should return error message", () => {
    expect(
      locationReducer(INITIAL_STATE, {
        type: LocationTypes.GET_LOCATION_FAILURE,
        payload: "there was an error"
      })
    ).toEqual({
      coordinates: { lat: 0.0, lng: 0.0 },
      city: "",
      error: "there was an error",
      gettingLocation: false
    });
  });
});
