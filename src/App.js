import React from "react";
import "./App.css";
import CurrentWeather from './current';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <CurrentWeather />
      </div>
    </Router>
  );
}

export default App;
