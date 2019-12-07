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
});
