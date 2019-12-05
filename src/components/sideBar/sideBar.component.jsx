import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING SELECTORS
import { selectListOfRestaurants } from "../../redux/restaurants/restaurants.reselect";
// IMPORTING COMPONENTS
import Section from "../section/section.component";
import LocationButton from "../locationButton/locationButton.component";
import Search from "../search/search.component";
// IMPORTING STYLES
import styles from "./sideBar.module.css";
import ToggleButton from "../toggleButton/toggleButton.component";

const SideBar = ({ listOfRestaurants }) => (
  <div className={styles.sideBar}>
    <div className={styles.sideBar__top__container}>
      <div className={styles.search__container}>
        <Search />
      </div>
      <div className={styles.locationAndToggle__container}>
        <LocationButton large={false} />
        <ToggleButton />
      </div>
    </div>
    {listOfRestaurants
      ? listOfRestaurants.businesses.map(list => (
          <Section
            key={list.id}
            name={list.name}
            rating={list.rating}
            review_count={list.review_count}
            categories={list.categories}
            isClosed={list.is_closed}
            location={list.location.address1}
            imageUrl={list.image_url}
            linkToYelp={list.url}
          />
        ))
      : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  listOfRestaurants: selectListOfRestaurants
});

export default connect(mapStateToProps)(SideBar);
