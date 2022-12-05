import React from "react";
import { Link } from "react-router-dom"
import { useCharacters } from "/Users/bravikmarci/codecool/module2/react-and-morty-react-bmarci888/react-and-morty/src/api/useData";
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
