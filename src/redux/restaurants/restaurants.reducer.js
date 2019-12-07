import RestaurantsTypes from "./restaurants.types";

const INITIAL_STATE = {
  gettingRestaurants: false,
  mapZoom: 2,
  listOfRestaurants: null,
  error: null
};

const restaurantsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   GET LIST OF RESTAURANTS NEAR BY FROM YELP
    case RestaurantsTypes.GET_YELP_RESTAURANTS_BY_CITY_START:
    case RestaurantsTypes.GET_YELP_RESTAURANTS_START:
      return {
        ...state,
        gettingRestaurants: true
      };
    case RestaurantsTypes.GET_YELP_RESTAURANTS_SUCCESS:
      return {
        ...state,
        mapZoom: 13,
        listOfRestaurants: action.payload,
        gettingRestaurants: false,
        error: null
      };
    case RestaurantsTypes.GET_YELP_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingRestaurants: false
      };

    default:
      return state;
  }
};

export default restaurantsReducer;
