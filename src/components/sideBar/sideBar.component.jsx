import React from "react";
// IMPORTING STYLES
import styles from "./sideBar.module.css";
// IMPORTING COMPONENTS
import Section from "../section/section.component";
const SideBar = () => (
  <div className={styles.sideBar}>
    <Section
      imageUrl={
        "https://lh5.googleusercontent.com/p/AF1QipNQsmg82SNaQXoRdFJnQbFEaBI6LSf-TyJvZWUS=w80-h92-p-k-no"
      }
    />
  </div>
);

export default SideBar;
