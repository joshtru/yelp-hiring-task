import { all, call } from "redux-saga/effects";

import { restaurantsSagas } from "./restaurants/restaurants.saga";
import { locationSagas } from "./location/location.saga";

export default function* rootSagas() {
  yield all([call(restaurantsSagas), call(locationSagas)]);
}
