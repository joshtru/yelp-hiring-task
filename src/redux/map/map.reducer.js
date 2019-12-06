import MapTypes from "./map.types";

const INITIAL_STATE = {
  showMap: false
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapTypes.TOGGLE_MAP:
      return {
        ...state,
        showMap: !state.showMap
      };

    default:
      return state;
  }
};

export default mapReducer;
