import { combineReducers } from "redux";

// IMPORT REDUCERS
import restaurantsReducer from "./restaurants/restaurants.reducer";
import locationReducer from "./location/location.reducer";

const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantsReducer
});

export default rootReducer;
