import React, { Component } from "react";
import SearchBarContainer from "../containers/SearchBarContainer";
import WeatherListContainer from "../containers/WeatherListContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <WeatherListContainer />
      </div>
    );
  }
}

export default App;
