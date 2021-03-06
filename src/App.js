import React from "react";
// IMPORTING STYLES
import styles from "./App.module.css";
// IMPORTING COMPONENTS
import SideBar from "./components/sideBar/sideBar.component";
import SideBarHeader from "./components/sideBarHeader/sideBarHeader.component";
import LocationButton from "./components/locationButton/locationButton.component";
import Search from "./components/search/search.component";
import GoogleMapContainer from "./components/googleMapContainer/googleMapContainer.component";

const App = () => (
  <div className={styles.App}>
    {/* SIDE BAR to display list of found business*/}
    <SideBarHeader />
    <SideBar />
    {/* LOCATION BUTTON to get user's location */}
    <div className={styles.locationButton__container}>
      <LocationButton />
    </div>
    {/* SEARCH SECTION to search for location */}
    <div className={styles.search__container}>
      <Search />
    </div>
    {/* GOOGLE MAP CONTAINER to display google map and map markers */}
    <GoogleMapContainer />
  </div>
);

export default App;
