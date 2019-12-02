import React from "react";
import GoogleMapReact from "google-map-react";
// IMPORTING STYLES
import "./App.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";

const API_KEY = process.env.REACT_APP_API_KEY_SECRET;

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
      <div className="App">
        <SideBar />

        <div className="map__container">
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
