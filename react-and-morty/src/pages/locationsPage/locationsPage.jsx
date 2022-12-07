import React from "react";
import { Link } from "react-router-dom"
import { useLocations } from "../../api/useData";
import LocationCards from "./LocationCards";
import ReactPaginate from "react-paginate";
import "../locationsPage/locations.css";
import { useState } from "react";

export default function LocationsPage({ page, setPage, setPlanetNumber }) {
    const [isDelayed, setIsDelayed] = useState(false);

    const handleClick = (data) => {
        setPage(data.selected + 1);
    }
    setTimeout(() => setIsDelayed(true), 100);

    return (
        <div className="locationPage">
            <div>
                <h1 className="title">Locations</h1>
                <Link className="backHome" to="/">Back To Home</Link>
            </div>
            <div className="planetCardsContainer">
                <LocationCards
                    useLocations={useLocations}
                    page={page}
                    setPlanetNumber={setPlanetNumber} />
            </div>
            {isDelayed ? <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={7}
                marginPagesDisplayed={1}
                onPageChange={handleClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                forcePage={page - 1}
            /> : <></>}
        </div>
    );
}
