import React from "react";

// IMPORTING STYLES
import styles from "./section.module.css";

const Section = ({ imageUrl }) => (
  <div className={styles.section__container}>
    <div className={styles.section__text__container}></div>
    <div className={styles.section__image__container}>
      <div
        className={styles.section__image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
    </div>
  </div>
);

export default Section;
