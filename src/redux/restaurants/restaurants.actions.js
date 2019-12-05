import RestaurantsTypes from "./restaurants.types";
// GET LIST OF YELP RESTAURANTS NEAR BY
export const getYelpRestaurantsStartBySearch = city => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_SEARCH,
  city
});
export const getYelpRestaurantsStartByCoord = coords => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_START_BY_COORD,
  coords
});
export const getYelpRestaurantsSuccess = result => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_SUCCESS,
  payload: result
});
export const getYelpRestaurantsFailure = error => ({
  type: RestaurantsTypes.GET_YELP_RESTAURANTS_FAILURE,
  payload: error
});
