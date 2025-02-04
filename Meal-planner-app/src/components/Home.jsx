import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Meal Planner App</h1>
      <p>Plan your meals efficiently and stay on track with your diet.</p>
      <div className="nav-buttons">
        <Link to="/meals" className="button">View Meals</Link>
        <Link to="/dayplans" className="button">Plan Your Week</Link>
      </div>
    </div>
  );
};

export default Home;
