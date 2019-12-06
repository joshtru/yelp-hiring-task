import React from "react";
import { connect } from "react-redux";
// IMPORTING REDUX ACTIONS
import { toggleMap } from "../../redux/map/map.action";
// IMPORTING STYLES
import styles from "./toggleButton.module.css";

const ToggleButton = ({ toggleMap }) => (
  <div className={styles.toggleButton}>
    <input type="checkbox" id="switch" />
    <label htmlFor="switch" onClick={() => toggleMap()}></label>
    <span className={styles.button__text}>Show on Map</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleMap: () => dispatch(toggleMap())
});
export default connect(null, mapDispatchToProps)(ToggleButton);
