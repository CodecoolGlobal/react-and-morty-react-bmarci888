import React from "react";
import planetPicture from "../../assets/wallpaperflare.com_wallpaper-2.jpeg";
import { Link } from "react-router-dom";

export default function LocationCards({ useLocations, page, setPlanetNumber, planetNumber }) {

    const data = useLocations(page);


    function cards(locations) {
        const planets = locations.results.map(planet => {
            return <Link onClick={() => setPlanetNumber(planet.id)} to={`/locations/${planet.id}`} className="planetCard" key={planet.id}>
                <img alt="planet" src={planetPicture} />
                <div>
                    <h4>{planet.name}</h4>
                    <h5>Type: {planet.type}</h5>
                </div>
            </Link>
        })
        return planets;
    }

    return (
        <>
            {data !== "Loading..." ? cards(data) : <p>Loading...</p>}
        </>

    );
}

