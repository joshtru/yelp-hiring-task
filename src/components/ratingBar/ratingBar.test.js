import { shallow } from "enzyme";
import React from "react";
import RatingBar from "./ratingBar.component";
describe("Rating Star Bar Component", () => {
  test("Matches snapshot", () => {
    expect(shallow(<RatingBar />)).toMatchSnapshot();
  });
  test("Expecting component to render", () => {
    expect(shallow(<RatingBar />)).toEqual({});
  });
  test("Expecting to undefined", () => {
    const wrapper = shallow(<RatingBar rating={-1} />);
    expect(wrapper.find("img").prop("src")).toEqual(undefined);
  });
  test("Expecting to return image file for small 0", () => {
    const wrapper = shallow(<RatingBar rating={0} />);
    expect(wrapper.find("img").prop("src")).toEqual("small_0.png");
  });
  test("Expecting to return image file for small 4", () => {
    const wrapper = shallow(<RatingBar rating={4} />);
    expect(wrapper.find("img").prop("src")).toEqual("small_4.png");
  });
  test("Expecting to return image file for small 5", () => {
    const wrapper = shallow(<RatingBar rating={5} />);
    expect(wrapper.find("img").prop("src")).toEqual("small_5.png");
  });
  test("Expecting to return undefined", () => {
    const wrapper = shallow(<RatingBar rating={5.5} />);
    expect(wrapper.find("img").prop("src")).toEqual(undefined);
  });
});
