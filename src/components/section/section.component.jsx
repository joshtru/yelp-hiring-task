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
  linkToYelp,
  imageUrl
}) => (
  <div className={styles.section__container}>
    <div className={styles.section__text__container}>
      <h3 className={styles.section__title}>{name}</h3>
      <p className={styles.section__rating}>
        <span>{rating}</span>
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
      <a href={linkToYelp} target="_blank" rel="noreferrer noopener">
        <div
          className={styles.yelp__logo__container}
          style={{ backgroundImage: `url(${YelpLogo})` }}
        ></div>
      </a>
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
