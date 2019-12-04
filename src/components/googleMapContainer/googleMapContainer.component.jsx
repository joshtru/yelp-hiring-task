import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import GoogleMapReact from "google-map-react";
// IMPORTING SELECTORS
import { selectListOfRestaurants } from "../../redux/restaurants/restaurants.reselect";

const GoogleMapContainer = ({ listOfRestaurants }) => {
  const renderMarkers = (map, maps) => {
    console.log(listOfRestaurants);
    listOfRestaurants.businesses.map(restaurant => {
      let marker = new maps.Marker({
        position: {
          lat: restaurant.coordinates.latitude,
          lng: restaurant.coordinates.longitude
        },
        map,
        title: restaurant.name
      });
      return marker;
    });
  };
  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: GOOGLE_KEY }}
        defaultCenter={{
          lat: 35.468,
          lng: -97.521
        }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {/* {listOfRestaurants.businesses.map(restaurant => (
              <span></span>
            ))} */}
      </GoogleMapReact>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  listOfRestaurants: selectListOfRestaurants
});
export default connect(mapStateToProps)(GoogleMapContainer);
