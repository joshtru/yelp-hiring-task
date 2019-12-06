import RestaurantsTypes from "./restaurants.types";
// GET LIST OF YELP RESTAURANTS NEAR BY
export const getYelpRestaurantsStart = () => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_START
});
export const getYelpRestaurantsSuccess = result => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_SUCCESS,
  payload: result
});
export const getYelpRestaurantsFailure = error => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_FAILURE,
  payload: error
});
