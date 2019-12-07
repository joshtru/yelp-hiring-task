import RestaurantsTypes from "../restaurants.types";
import restaurantsReducer from "../restaurants.reducer";

const INITIAL_STATE = {
  gettingRestaurants: false,
  mapZoom: 2,
  listOfRestaurants: null,
  error: null
};

describe("Restaurants Reducer", () => {
  // RETURNS INITIAL STATE
  test("Should return initial state", () => {
    expect(restaurantsReducer(INITIAL_STATE, {})).toEqual({
      gettingRestaurants: false,
      mapZoom: 2,
      listOfRestaurants: null,
      error: null
    });
  });
  //   GETTING RESTAURANT BY CITY START
  test("Should return true for getting restaurants", () => {
    expect(
      restaurantsReducer(INITIAL_STATE, {
        type: RestaurantsTypes.GET_YELP_RESTAURANTS_BY_CITY_START
      })
    ).toEqual({
      gettingRestaurants: true,
      mapZoom: 2,
      listOfRestaurants: null,
      error: null
    });
  });
  // GETTING RESTAURANTS START
  test("Should return true for getting restaurants", () => {
    expect(
      restaurantsReducer(INITIAL_STATE, {
        type: RestaurantsTypes.GET_YELP_RESTAURANTS_START
      })
    ).toEqual({
      gettingRestaurants: true,
      mapZoom: 2,
      listOfRestaurants: null,
      error: null
    });
  });
  //   GETTING RESTAURANTS SUCCESSFULL
  test("Should return list of restaurants", () => {
    expect(
      restaurantsReducer(INITIAL_STATE, {
        type: RestaurantsTypes.GET_YELP_RESTAURANTS_SUCCESS,
        payload: {
          bussiness: [
            {
              name: "hello",
              url: "world"
            }
          ]
        }
      })
    ).toEqual({
      gettingRestaurants: false,
      mapZoom: 13,
      listOfRestaurants: {
        bussiness: [{ name: "hello", url: "world" }]
      },
      error: null
    });
  });
  //   GETTING RESTAURANTS FAILURE
  test("Should return error message", () => {
    expect(
      restaurantsReducer(INITIAL_STATE, {
        type: RestaurantsTypes.GET_YELP_RESTAURANTS_FAILURE,
        payload: "there was an error"
      })
    ).toEqual({
      gettingRestaurants: false,
      mapZoom: 2,
      listOfRestaurants: null,
      error: "there was an error"
    });
  });
});
