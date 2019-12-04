import React from "react";
import { connect } from "react-redux";
import Script from "react-load-script";

// IMPORTING REDUX ACTIONS
import { getYelpRestaurantsStart } from "../../redux/restaurants/restaurants.actions";
// IMPORTING STYLES
import styles from "./search.module.css";
const GOOGLE_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;
const Search = ({ getRestaurantsNearBy }) => {
  // HANDLE SCRIPT
  let autocomplete = null;
  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );
    console.log(autocomplete);

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    autocomplete.setFields(["address_components", "formatted_address"]);

    // Fire Event when a suggested name is selected
    autocomplete.addListener("place_changed", handlePlaceSelect);
  };
  // HANDLE PLACE SELECT

  const handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = autocomplete.getPlace();
    const address = addressObject.address_components;
    // Check if address is valid
    if (address) {
      const city = address[0].long_name;
      const query = addressObject.formatted_address;
      getRestaurantsNearBy(query);
    }
  };
  return (
    <div className={styles.search__container}>
      <input
        className={styles.search__input}
        id="autocomplete"
        type="search"
        placeholder="Search City"
      />
      {/* <Script
        type="text/javascript"
        url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`}
        defer
        onLoad={handleScriptLoad}
      /> */}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  getRestaurantsNearBy: city => dispatch(getYelpRestaurantsStart(city))
});

export default connect(null, mapDispatchToProps)(Search);
