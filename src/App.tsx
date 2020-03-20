import React from "react";
import ItemsFiltersList from "./Filters/ItemsFiltersList";
import TrackList from "./Components/TrackList";
import { connect } from "react-redux";
import { changeFilter } from "./store/actions/action";
const App = () =>{
  return (
      <div className="container">
        <ItemsFiltersList/>
        <TrackList/>
  
      </div>
  );
};


function mapStateToProps(state) {
  const filters = state.get("filters")
  const campgrounds = state.get("campgrounds")
  const filtered_campgrounds = campgrounds
  const active_filters = filters.filter(
      item => item.get("inuse") === true
  );
  active_filters.forEach(filter => {
    filtered_campgrounds = filtered_campgrounds.filter(
        item => item.get("properties").get(filter.get("id")) === true
    )
  });

  return {
    filters: filters,
    campgrounds: filtered_campgrounds
  };
}

export const TracksFilterApp = connect(mapStateToProps, changeFilter)(App);
