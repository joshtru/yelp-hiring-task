import React from "react";

import styles from "./toggleButton.module.css";

const ToggleButton = () => (
  <div className={styles.toggleButton}>
    <input type="checkbox" id="switch" />
    <label for="switch"></label>
    <span className={styles.button__text}>Show on Map</span>
  </div>
);
export default ToggleButton;
