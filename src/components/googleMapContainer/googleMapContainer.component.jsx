import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import GoogleMapReact from "google-map-react";
// IMPORTING SELECTORS
import {
  selectListOfRestaurants,
  selectMapZoom
} from "../../redux/restaurants/restaurants.reselect";
import { selectUserCoordinates } from "../../redux/location/location.reselect";
// IMPORTING REDUX ACTIONS
import { setUserCoordinates } from "../../redux/location/location.actions";
// IMPORTING COMPONENTS
import MapMarker from "../mapMarker/mapMarker.component";
const GOOGLE_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;
const GoogleMapContainer = ({
  setUserCoordinates,
  userCoordinates,
  listOfRestaurants,
  mapZoom
}) => {
  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        center={userCoordinates}
        zoom={mapZoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={map => {
          const { lat, lng } = map;
          setUserCoordinates({ lat, lng });
        }}
      >
        {listOfRestaurants !== null
          ? listOfRestaurants.businesses.map((restaurant, index) => (
              <MapMarker
                key={restaurant.id}
                lat={restaurant.coordinates.latitude}
                lng={restaurant.coordinates.longitude}
                name={restaurant.name}
                link={restaurant.url}
                number={index + 1}
              />
            ))
          : null}
      </GoogleMapReact>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  listOfRestaurants: selectListOfRestaurants,
  userCoordinates: selectUserCoordinates,
  mapZoom: selectMapZoom
});
const mapDispatchToProps = dispatch => ({
  setUserCoordinates: coords => dispatch(setUserCoordinates(coords))
});
export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer);
