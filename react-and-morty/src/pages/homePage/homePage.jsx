import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>Rick & Morty</h1>
            <Link to="/characters">Characters</Link>
            <br />
            <br />
            <Link to="/locations">Locations</Link>
        </>
    );
}