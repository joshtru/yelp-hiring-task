import React from "react";
import GoogleMapReact, { Google } from "google-map-react";
import axios from "axios";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";
import Search from "./components/search/search.component";

const API_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userLat: null,
      userLong: null,
      error: null,
      gettingLocation: false
    };
  }
  static defaultProps = {
    center: {
      lat: 35.468,
      lng: -97.521
    },
    zoom: 11
  };
  getLocation = () => {
    this.setState({ gettingLocation: true, error: null });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({ gettingLocation: false, error: null });
      }, this.locationError);
    } else {
      this.setState({
        error: "Location unavailable",
        gettingLocation: false
      });
    }
  };
  locationError = error => {
    let receivedError = null;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        receivedError = "Location Denied";
        break;
      case error.POSITION_UNAVAILABLE:
        receivedError = "Location unavailable";
        break;
      case error.TIMEOUT:
        receivedError = "timed out";
        break;
      case error.UNKNOWN_ERROR:
        receivedError = "error occured";
        break;
      default:
        receivedError = "No location";
        break;
    }
    this.setState({ error: receivedError, gettingLocation: false });
  };
  render() {
    const { gettingLocation, error } = this.state;
    return (
      <div className={styles.App}>
        {/* SIDE BAR */}
        <SideBar />
        {/* LOCATION BUTTON */}
        <button
          type="button"
          className={styles.location__button}
          onClick={() => this.getLocation()}
          disabled={gettingLocation}
        >
          {gettingLocation
            ? "getting location..."
            : error
            ? error
            : "use my location"}
        </button>
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
