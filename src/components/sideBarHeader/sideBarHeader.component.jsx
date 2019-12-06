import React from "react";
// IMPORTING COMPONENTS
import LocationButton from "../locationButton/locationButton.component";
import Search from "../search/search.component";
import ToggleButton from "../toggleButton/toggleButton.component";
// IMPORTING STYLES
import styles from "./sideBarHeader.module.css";

const SideBarHeader = () => (
  <div className={styles.sideBar__top__container}>
    <div className={styles.search__container}>
      <Search />
    </div>
    <div className={styles.locationAndToggle__container}>
      <LocationButton large={false} />
      <ToggleButton />
    </div>
  </div>
);
export default SideBarHeader;
