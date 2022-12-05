import React from "react";
import { Link } from "react-router-dom"
import { useLocations } from "/Users/bravikmarci/codecool/module2/react-and-morty-react-bmarci888/react-and-morty/src/api/useData";
import LocationCards from "./LocationCards";

export default function LocationsPage() {
    return (
        <div>
            <div>
                <h1>Locations</h1>
                <Link to="/">Back To Home</Link>
            </div>
            <div>
                <LocationCards useLocations={useLocations} />
            </div>
        </div>
    );
}