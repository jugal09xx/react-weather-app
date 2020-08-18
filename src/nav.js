import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h3>Weather App</h3>
      <ul>
        <Link to="/current">
          <li>Current Weather</li>
        </Link>
        <Link to="/5days">
          <li>5 day weather</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
