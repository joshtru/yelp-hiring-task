import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import Script from "react-load-script";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";

const GOOGLE_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;
const YELP_KEY = process.env.REACT_APP_SECRET_YELP_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      gettingLocation: false,
      searchValue: "",
      businesses: [],
      region: {},
      city: "",
      query: "",
      hasMounted: false
    };
  }
  static defaultProps = {
    center: {
      lat: 35.468,
      lng: -97.521
    },
    zoom: 11
  };
  componentDidMount() {
    this.setState({ hasMounted: true });
  }
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
  // HANDLE SUBMIT
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.search.value);
  };
  // HANDLE CHANGE
  handleChange = event => {
    const { value } = event.target;
    const { userLat, userLong } = this.state;
    // this.setState({ searchValue: value });
    // axios
    //   .get(
    //     `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`,
    //     {
    //       params: {
    //         term: "restaurants",
    //         location: value
    //         // latitude: userLat,
    //         // longitude: userLong
    //       },
    //       headers: {
    //         Authorization: `Bearer ${YELP_KEY}`
    //       }
    //     }
    //   )
    //   .then(response => {
    //     this.setState({
    //       businesses: response.data.businesses,
    //       region: response.data.region
    //     });
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(`ERROR: ${error}`);
    //     this.setState({
    //       businesses: [],
    //       region: {}
    //     });
    //   });
  };
  // HANDLE SCRIPT
  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(["address_components", "formatted_address"]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };
  // HANDLE PLACE SELECT
  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
  };
  render() {
    const {
      gettingLocation,
      error,
      searchValue,
      businesses,
      query,
      city
    } = this.state;
    console.log(city);
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
              id="autocomplete"
              className={styles.search__input}
              type="search"
              name="search"
              placeholder="Search Restaurants"
              autoComplete="off"
            />
          </form>
          <div className={styles.autocomplete__box}>
            {this.hasMounted ? (
              <Script
                url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`}
                onLoad={this.handleScriptLoad}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.map__container}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: GOOGLE_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
