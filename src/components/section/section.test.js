import { shallow } from "enzyme";
import React from "react";
import Section from "./section.component";

describe("Section Component", () => {
  // const mockProps = {
  //   name,
  //   rating,
  //   review_count,
  //   location,
  //   isClosed,
  //   categories = [],
  //   linkToYelp,
  //   imageUrl
  // }
  test("Renders without crashing", () => {
    expect(shallow(<Section />)).toMatchSnapshot();
  });
  // Testing categories
  const mockProps1 = {
    categories: []
  };
  const mockProps2 = {
    categories: [
      {
        alias: "cajun",
        title: "Cajun/Creole"
      },
      {
        alias: "soulfood",
        title: "Soul Food"
      }
    ]
  };
  test("Renders without categories", () => {
    expect(shallow(<Section categories={mockProps1.categories} />)).toEqual({});
  });
  test("Renders categories without crashing", () => {
    expect(shallow(<Section categories={mockProps2.categories} />)).toEqual({});
  });
  test("Renders Close if isClose is true", () => {
    const wrapper = shallow(<Section isClosed={true} />).find(".isClosed");
    expect(wrapper.text()).toBe("Close");
  });
  test("Renders Open if isClose is false", () => {
    const wrapper = shallow(<Section isClosed={false} />).find(".isClosed");
    expect(wrapper.text()).toBe("Open");
  });
});
