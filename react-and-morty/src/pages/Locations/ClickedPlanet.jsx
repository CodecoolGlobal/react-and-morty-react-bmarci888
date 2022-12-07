import React from "react";
import './ClickedPlanet.css';
import planetPicture from "../../assets/wallpaperflare.com_wallpaper-2.jpeg"
import { useLocations } from "../../api/useData";
import { Link } from "react-router-dom";


export default function ClickedPlanet({ planetNumber, page }) {

    const data = useLocations(page);



    function getDetails(data) {
        const planet = data.results.filter(planet => planet.id === planetNumber);
        return <div className="clickedPlanet">
                    <Link className="backFromDetails" to="/locations">Back To Locations</Link>
                <div className="clickedCard">
                    <div className="clickedDetails">
                        <img alt="planet" src={planetPicture} height="300px"/>
                    </div>
                    <div className="clickedDetails">
                        <h4>{planet[0].name}</h4>
                        <h5>Type: {planet[0].type}</h5>
                        <h5>Dimension: {planet[0].dimension}</h5>
                        <h5>Residents Number: {planet[0].residents.length}</h5>

                    </div>
                </div>
            </div>
    }

    return (
        <>
            {data !== "Loading..." ? getDetails(data) : <p>Loading...</p>}
        </>
    );
}