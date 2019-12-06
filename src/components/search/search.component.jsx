import React from "react";
import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { createStructuredSelector } from "reselect";
// IMPORTING RESELECT
import { selectUserCity } from "../../redux/location/location.reselect";
// IMPORTING REDUX ACTIONS
import {
  setUserCity,
  setUserCoordinates
} from "../../redux/location/location.actions";
// IMPORTING STYLES
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

const Search = ({ setUserCity, city, setUserCoordinates }) => {
  const handleChange = address => {
    // this.setState({ address });
    setUserCity(address);
    console.log(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setUserCity(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then(latLng => setUserCoordinates(latLng))
      .catch(error => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={city}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <div className={styles.search__bar__container}>
            <SearchIcon className={styles.search__icon} />
            <input
              className={styles.search__input}
              {...getInputProps({
                placeholder: "Search Places ..."
              })}
            />
          </div>
          <div className={styles.autocomplete__box}>
            <ul>
              {suggestions.map(suggestion => {
                return (
                  <li
                    key={suggestion.id}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    {suggestion.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
const mapStateToProps = createStructuredSelector({
  city: selectUserCity
});
const mapDispatchToProps = dispatch => ({
  setUserCity: city => dispatch(setUserCity(city)),
  setUserCoordinates: coords => dispatch(setUserCoordinates(coords))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
