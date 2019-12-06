import { combineReducers } from "redux";

// IMPORT REDUCERS
import restaurantsReducer from "./restaurants/restaurants.reducer";
import locationReducer from "./location/location.reducer";
import mapReducer from "./map/map.reducer";
import searchReducer from "./search/search.reducer";

const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantsReducer,
  map: mapReducer,
  search: searchReducer
});

export default rootReducer;
