import React from "react";
import "./Locations.css";
import { Link } from "react-router-dom"
import { useLocations } from "../../api/useData";
import LocationCards from "./LocationCard";
import ReactPaginate from "react-paginate";

export default function LocationsPage({ page, setPage, planetNumber, setPlanetNumber }) {

    const handleClick = (data) => {
        setPage(data.selected + 1);
    }

    return (
        <div className="locationPage">
            <div>
                <h1 className="title">Locations</h1>
                <Link className="backHome" to="/">Back To Home</Link>
            </div>
            <div className="planetCardsContainer">
                <LocationCards useLocations={useLocations} page={page} setPage={setPage} planetNumber={planetNumber} setPlanetNumber={setPlanetNumber} />
            </div>
            <ReactPaginate
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
            />
        </div>
    );
}