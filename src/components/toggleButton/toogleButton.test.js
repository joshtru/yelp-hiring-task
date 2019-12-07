import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ToggleButton from "./toggleButton.component";

describe("Google Map Container Component", () => {
  const mockStore = configureStore();
  let wrapper;
  beforeEach(() => {
    const mockProps = mockStore({
      toggleMap: jest.fn()
    });
    wrapper = shallow(
      <Provider store={mockProps}>
        <ToggleButton />
      </Provider>
    );
  });
  test("Renders without crashing", () => {
    expect(shallow(<wrapper />)).toMatchSnapshot();
  });
});
