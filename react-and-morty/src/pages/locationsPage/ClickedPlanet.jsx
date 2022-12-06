import React from "react";
import planetPicture from "../../assets/wallpaperflare.com_wallpaper-2.jpeg"
import { useLocations } from "../../api/useData";

export default function ClickedPlanet({ planetNumber, page }) {

    const data = useLocations(page);
    function getDetails(data) {
        const planet = data.results.filter(planet => planet.id === planetNumber);
        return <div className="planetDetails">
            <img alt="planet" src={planetPicture} />
            <div>
                <h4>{planet[0].name}</h4>
                <h5>Type: {planet[0].type}</h5>
                <h5>Dimension: {planet[0].dimension}</h5>
                <h5>Residents Number: {planet[0].residents.length}</h5>
            </div>
        </div>
    }

    return (
        <>
            {data !== "Loading..." ? getDetails(data) : <p>Loading...</p>}
        </>
    );
}