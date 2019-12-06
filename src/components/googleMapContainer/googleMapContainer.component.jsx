import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import GoogleMapReact from "google-map-react";
// IMPORTING SELECTORS
import { selectListOfRestaurants } from "../../redux/restaurants/restaurants.reselect";
const GOOGLE_KEY = process.env.REACT_APP_SECRET_MAP_GOOGLE;
const GoogleMapContainer = ({ listOfRestaurants }) => {
  // RENDER MARKER FOR USE ON GOOGLE MAP
  const renderMarkers = (map, maps) => {
    return listOfRestaurants
      ? listOfRestaurants.businesses.map((restaurant, index) => {
          /*global google*/
          let marker = new maps.Marker({
            position: {
              lat: restaurant.coordinates.latitude,
              lng: restaurant.coordinates.longitude
            },
            map,
            title: restaurant.name,
            label: {
              color: "black",
              fontWeight: "bold",
              text: restaurant.name
            },
            icon: {
              labelOrigin: new google.maps.Point(11, 50),
              url: `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red${index +
                1}.png`,
              size: new google.maps.Size(22, 40),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(11, 40)
            }
          });
          // Listen for click on marker to redirect to yelp site
          marker.addListener("click", function() {
            window.open(restaurant.url);
          });
          return marker;
        })
      : null;
  };
  const showCoord = (map, maps) => {
    console.log(map);
  };
  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        defaultCenter={{
          lat: 35.468,
          lng: -97.521
        }}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        onClick={(map, maps) => showCoord(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  listOfRestaurants: selectListOfRestaurants
});
export default connect(mapStateToProps)(GoogleMapContainer);
