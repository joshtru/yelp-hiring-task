import { shallow } from "enzyme";
import React from "react";
import SideBarHeader from "./sideBarHeader.component";

describe("Side Bar Header Component", () => {
  test("Renders without crashing", () => {
    expect(shallow(<SideBarHeader />)).toMatchSnapshot();
  });
});
