import React from "react";
import { useState } from "react";

export default function LocationCards({ useLocations }) {
    const [page, setPage] = useState(1);

    const data = useLocations(page);

    function cards(locations) {
        const planets = locations.results.map(planet => {
            return <div key={planet.id}>
                <h4>Planet Name:</h4>
                <p>{planet.name}</p>
                <h4>Planet Type:</h4>
                <p>{planet.type}</p>
            </div>
        })
        return planets;
    }

    return (
        <>
            {data !== "Loading..." ? cards(data) : <p>Loading...</p>}
        </>

    );
}

