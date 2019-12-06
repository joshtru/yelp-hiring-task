import React from "react";
// IMPORTING STYLES
import styles from "./mapMarker.module.css";
// IMPORTING SVG
import { ReactComponent as MarkerIcon } from "../../assets/icons/map-marker-icon.svg";

const MapMarker = ({ name, number, link }) => (
  <div className={styles.marker__container}>
    <a href={link} target="_blank" rel="noreferrer noopener">
      <span className={styles.marker__number}>{number}</span>
      <MarkerIcon className={styles.marker__icon} />
      <span className={styles.marker__name}>{name}</span>
    </a>
  </div>
);
export default MapMarker;
