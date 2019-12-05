import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import LocationButton from "./locationButton.component";

describe("Location Button Component", () => {
  const mockStore = configureStore();
  let wrapper;
  beforeEach(() => {
    const mockProps = mockStore({
      getLocation: jest.fn(),
      gettingLocation: false,
      coordinates: null,
      error: null
    });
    wrapper = shallow(
      <Provider store={mockProps}>
        <LocationButton />
      </Provider>
    );
  });
  test("Renders component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Getting location function working", () => {
    const store = mockStore({
      gettingLocation: true,
      coordinates: null,
      error: null
    });
    const mockProps2 = {
      getLocation: jest.fn(),
      gettingLocation: true,
      coordinates: null,
      error: null
    };
    const wrapper2 = shallow(
      <Provider store={store}>
        <LocationButton {...mockProps2} />
      </Provider>
    );
    // console.log(wrapper2.props());
  });
  // test("Simulate click event", () => {});
  // test("Simulate on getting location", () => {});
  // test("Simulate location not found", () => {});
});
