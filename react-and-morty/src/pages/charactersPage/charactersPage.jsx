import React from "react";
import { Link } from "react-router-dom"
import { useCharacters } from "../../api/useData";
import CharacterCards from "./CharacterCards"

export default function LocationsPage() {
    return (
        <div>
            <div>
                <h1>Characters</h1>
                <Link to="/">Back To Home</Link>
            </div>
            <div>
                <CharacterCards useCharacters={useCharacters} />
            </div>
        </div>
    );
}
