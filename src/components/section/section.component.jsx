import React from "react";
import YelpLogo from "../../assets/yelp-logo.jpg";
// IMPORTING COMPONENTS
import RatingBar from "../ratingBar/ratingBar.component";
// IMPORTING STYLES
import styles from "./section.module.css";
const Section = ({
  name,
  rating,
  review_count,
  location,
  isClosed,
  categories = [],
  imageUrl
}) => (
  <div className={styles.section__container}>
    <div className={styles.section__text__container}>
      <h3 className={styles.section__title}>{name}</h3>
      <p className={styles.section__rating}>
        {rating}
        <RatingBar rating={rating} />
        <span>({review_count})</span>
      </p>
      <p className={styles.categories}>
        {categories.map(category => (
          <span key={category.alias}>{category.title}</span>
        ))}
      </p>
      <p className={styles.location}>{location}</p>
      <p className={styles.isClosed}>{isClosed ? "Close" : "Open"}</p>
      <div className={styles.yelp__logo__container}>
        <img className={styles.yelp__logo} src={YelpLogo} alt="yelp logo" />
      </div>
    </div>
    {/* IMAGE SECTION */}
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
