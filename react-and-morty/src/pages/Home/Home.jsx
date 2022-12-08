import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <>
      <div className="home">
        <img src={logo} className="logo" width="600" alt="logo" />
        <div className="characterContainer">
          <Link to="/characters" className="characterBtn">
            Characters
          </Link>
        </div>
        <div className="locationContainer">
          <Link to="/locations" className="locationBtn">
            Locations
          </Link>
        </div>
        <div className="introContainer">
          <p className="intro">
            Discover all the characters and locations of the Rick and Morty
            Universe
          </p>
        </div>
      </div>
    </>
  );
}
