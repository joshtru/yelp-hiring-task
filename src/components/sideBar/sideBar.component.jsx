import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// IMPORTING SELECTORS
import { selectListOfRestaurants } from "../../redux/restaurants/restaurants.reselect";
import { selectShowMap } from "../../redux/map/map.reselect";
// IMPORTING COMPONENTS
import Section from "../section/section.component";
// IMPORTING STYLES
import styles from "./sideBar.module.css";

const SideBar = ({ listOfRestaurants, showMap }) => {
  return !showMap ? (
    <div className={styles.sideBar}>
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
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  listOfRestaurants: selectListOfRestaurants,
  showMap: selectShowMap
});

export default connect(mapStateToProps)(SideBar);
