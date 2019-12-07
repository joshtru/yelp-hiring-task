import MapTypes from "../map.types";
import mapReducer from "../map.reducer";

describe("Map Reducer", () => {
  const INITIAL_STATE = {
    showMap: false
  };
  test("Should return the initial state", () => {
    expect(mapReducer(INITIAL_STATE, {})).toEqual({ showMap: false });
  });
  test("Should return true for toggle action", () => {
    expect(
      mapReducer(INITIAL_STATE, {
        type: MapTypes.TOGGLE_MAP
      })
    ).toEqual({ showMap: true });
  });
  test("Should return false for toggle action", () => {
    expect(
      mapReducer(
        { showMap: true },
        {
          type: MapTypes.TOGGLE_MAP
        }
      )
    ).toEqual({ showMap: false });
  });
});
