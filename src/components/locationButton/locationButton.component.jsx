import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import {
  selectGettingLocation,
  selectLocationCoordinates,
  selectLocationError
} from "../../redux/location/location.reselect";
// IMPORTING REDUX ACTIONS
import { getLocationStart } from "../../redux/location/location.actions";
// IMPORTING STYLES
import styles from "./locationButton.module.css";

const LocationButton = ({
  getLocation,
  gettingLocation,
  error,
  large = true
}) => {
  return (
    <button
      type="button"
      className={`
        ${styles.location__button} ${
        large ? styles.largeButton : styles.smallButton
      }
          `}
      onClick={() => getLocation()}
      disabled={gettingLocation}
    >
      {gettingLocation
        ? "getting location..."
        : error
        ? error
        : "use my location"}
    </button>
  );
};
const mapStateToProps = createStructuredSelector({
  gettingLocation: selectGettingLocation,
  coordinates: selectLocationCoordinates,
  error: selectLocationError
});
const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getLocationStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationButton);
