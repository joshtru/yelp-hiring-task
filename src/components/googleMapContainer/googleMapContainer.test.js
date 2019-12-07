import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import GoogleMapContainer from "./googleMapContainer.component";
import MapMarker from "../mapMarker/mapMarker.component";

describe("Google Map Container Component", () => {
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
        <GoogleMapContainer>
          <MapMarker />
        </GoogleMapContainer>
      </Provider>
    );
  });
  test("Renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
