import React from "react";
import GoogleMapReact from "google-map-react";
import Script from "react-load-script";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";
import LocationButton from "./components/locationButton/locationButton.component";

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

  // HANDLE SCRIPT
  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
      // options
    );
    console.log(this.autocomplete);

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
    const { query, city } = this.state;
    console.log(query, "City", city);
    return (
      <div className={styles.App}>
        {/* SIDE BAR */}
        <SideBar />
        {/* LOCATION BUTTON */}
        <LocationButton />
        {/* SEARCH SECTION */}
        <div className={styles.search__container}>
          <input
            className={styles.search__input}
            id="autocomplete"
            type="search"
            placeholder="Search City"
          />
          {/* {this.hasMounted ? ( */}
          {/* <Script
            type="text/javascript"
            url={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&libraries=places`}
            defer
            onLoad={this.handleScriptLoad}
          /> */}
          {/* ) : null} */}
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
