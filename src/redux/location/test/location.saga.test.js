// IMPORTING LOCATION ACTIONS
import { getUserLocation } from "../location.saga";

describe("Location saga", () => {
  // TESTING GET USER LOCATION
  test("Should return location unavilable", () => {
    const gen = getUserLocation();
    expect(gen.next().value.payload.action.payload).toEqual(
      "Location unavailable"
    );
  });
});
