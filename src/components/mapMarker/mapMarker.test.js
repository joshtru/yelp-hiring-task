import { shallow } from "enzyme";
import React from "react";
import MapMaker from "./mapMarker.component";

describe("Map Marker Component", () => {
  test("Renders without crashing", () => {
    expect(shallow(<MapMaker />)).toMatchSnapshot();
  });
});
