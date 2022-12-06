
import React from "react";
import "../App.css";
import { Link } from "react-router-dom"
import logo from './logo.png';

export default function Home() {
    return (
        <>
            <img src={logo} className="logo" width="700" alt="logo"/>
            <div className="characterContainer">
            <Link to="/characters" className="characterBtn">Characters</Link>
            </div>
            <div className="locationContainer">
            <Link to="/locations" className="locationBtn">Locations</Link>
            </div>
           
        </>
    );
}