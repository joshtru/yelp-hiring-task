import { createSelector } from "reselect";

export const selectMap = state => state.map;

export const selectShowMap = createSelector(selectMap, map => map.showMap);
