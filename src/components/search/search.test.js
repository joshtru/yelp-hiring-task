import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Search from "./search.component";

describe("Search Component", () => {
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
        <Search />
      </Provider>
    );
  });
  test("Renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
