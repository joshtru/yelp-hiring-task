import { createSelector } from "reselect";

export const selectRestaurants = state => state.restaurants;

export const selectGettingRestaurants = createSelector(
  selectRestaurants,
  restaurants => restaurants.gettingRestaurants
);
export const selectListOfRestaurants = createSelector(
  selectRestaurants,
  restaurants => restaurants.listOfRestaurants
);
