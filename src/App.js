import React from "react";
import GoogleMapReact from "google-map-react";
// IMPORTING STYLES
import "./App.css";

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
      <div className="App" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default App;
