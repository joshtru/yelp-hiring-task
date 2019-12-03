import { createSelector } from "reselect";

export const selectLocation = state => state.location;

export const selectGettingLocation = createSelector(
  selectLocation,
  location => location.gettingLocation
);
export const selectLocationCoordinates = createSelector(
  selectLocation,
  location => location.coordinates
);
export const selectLocationError = createSelector(
  selectLocation,
  location => location.error
);
