import React from "react";
import GoogleMapReact from "google-map-react";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";
import LocationButton from "./components/locationButton/locationButton.component";
import Search from "./components/search/search.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Search />
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
