import React from "react";

import styles from "./mapMarker.module.css";
import { ReactComponent as MarkerIcon } from "../../assets/icons/map-marker-icon.svg";

const MapMarker = ({ name, number, link }) => (
  <div className={styles.mapMaker}>
    <div className={styles.marker__container}>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <span className={styles.marker__number}>{number}</span>
        <MarkerIcon className={styles.marker__icon} />
        <span className={styles.marker__name}>{name}</span>
      </a>
    </div>
  </div>
);
export default MapMarker;
