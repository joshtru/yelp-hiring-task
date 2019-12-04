import { shallow, render } from "enzyme";
import React from "react";
import App from "./App";

describe("App Component", () => {
  test("Expect App component to return no values", () => {
    expect(shallow(<App />)).toEqual({});
  });
  test("Expect component to match with snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
