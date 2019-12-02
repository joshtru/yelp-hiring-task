import React from "react";
import GoogleMapReact from "google-map-react";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";
import Search from "./components/search/search.component";

const API_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;

class App extends React.Component {
  static defaultProps = {
    center: {
      lat: 35.468,
      lng: -97.521
    },
    zoom: 11
  };
  render() {
    return (
      <div className={styles.App}>
        {/* SIDE BAR */}
        <SideBar />
        {/* LOCATION BUTTON */}
        <button className={styles.location__button}>use my location</button>
        {/* SEARCH SECTION */}
        <div className={styles.search__container}>
          <input
            className={styles.search__input}
            type="search"
            placeholder="Search Restaurants"
          />
        </div>
        <div className={styles.map__container}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
