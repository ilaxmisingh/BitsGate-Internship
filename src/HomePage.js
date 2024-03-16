
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">
        <element class ="button">View Profile</element>
      </Link>
    </div>
  );
}

export default HomePage;
