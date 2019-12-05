import { combineReducers } from "redux";

// IMPORT REDUCERS
import restaurantsReducer from "./restaurants/restaurants.reducer";
import locationReducer from "./location/location.reducer";
import mapReducer from "./map/map.reducer";

const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantsReducer,
  map: mapReducer
});

export default rootReducer;
