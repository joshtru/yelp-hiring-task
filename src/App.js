import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";

const GOOGLE_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userLat: 36.280388,
      userLong: -95.845398,
      error: null,
      gettingLocation: false,
      searchValue: "",
      suggestions: {
        businesses: [],
        categories: [],
        terms: []
      }
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
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };
  handleChange = event => {
    const { value } = event.target;
    const { userLat, userLong } = this.state;
    this.setState({ searchValue: value });
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/autocomplete`,
        {
          params: {
            text: value
            // latitude: userLat,
            // longitude: userLong
          },
          headers: {
            Authorization: `Bearer ${YELP_KEY}`
          }
        }
      )
      .then(response => {
        this.setState({
          suggestions: {
            businesses: response.data.businesses,
            categories: response.data.categories,
            terms: response.data.terms
          }
        });
        console.log(response);
      })
      .catch(error => {
        console.log(`ERROR: ${error}`);
        this.setState({
          suggestions: {
            businesses: [],
            categories: [],
            terms: []
          }
        });
      });
  };
  render() {
    const {
      gettingLocation,
      error,
      searchValue,
      suggestions: { businesses, terms, categories }
    } = this.state;
    console.log(terms);
    console.log(searchValue);
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
          <form onSubmit={this.handleSubmit}>
            <input
              className={styles.search__input}
              type="search"
              name="search"
              onChange={this.handleChange}
              placeholder="Search Restaurants"
              autoComplete="off"
            />
          </form>
          <div className={styles.autocomplete__box}>
            <ul>
              {/* BUSINESSES */}
              {businesses.map(value => (
                <li
                  key={value}
                  onClick={() => this.setState({ searchValue: value })}
                >
                  {value}
                </li>
              ))}
              {/* CATEGORIES */}
              {categories.map(value => (
                <li
                  key={value.alias}
                  onClick={() => this.setState({ searchValue: value.title })}
                >
                  {value.title}
                </li>
              ))}
              {/* TERMS */}
              {terms.map(value => (
                <li
                  key={value.text}
                  onClick={() => this.setState({ searchValue: value.text })}
                >
                  {value.text}
                </li>
              ))}
            </ul>
          </div>
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
