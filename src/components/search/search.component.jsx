import React from "react";
import { connect } from "react-redux";

// IMPORTING REDUX ACTIONS
import { getYelpRestaurantsStartBySearch } from "../../redux/restaurants/restaurants.actions";
// IMPORTING STYLES
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
const Search = () => {
  return (
    <div>
      <div className={styles.search__bar__container}>
        <SearchIcon className={styles.search__icon} />
        <input
          className={styles.search__input}
          id="autocomplete"
          type="text"
          placeholder="Search City"
        />
      </div>
      <div className={styles.autocomplete__box}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  getRestaurantsNearBy: city => dispatch(getYelpRestaurantsStartBySearch(city))
});

export default connect(null, mapDispatchToProps)(Search);
