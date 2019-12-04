import { shallow } from "enzyme";
import React from "react";
import RatingBar from "./ratingBar.component";
describe("Rating Star Bar Component", () => {
  test("Expecting component to return Nothing when passed no props", () => {
    expect(shallow(<RatingBar />)).toEqual({});
  });
  test("Expecting component to return no value with props passed", () => {
    expect(shallow(<RatingBar rating={4.5} />)).toEqual({});
  });
});
