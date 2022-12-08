import React from "react";
import { useState } from "react";

export default function LocationCards({ useCharacters }) {
    const [page, setPage] = useState(40);
    setPage(1);

    const data = useCharacters(page);

    function cards(locations) {
        const characters = locations.results.map(character => {
            return <div key={character.id}>
                <h4>Character Name:</h4>
                <p>{character.name}</p>
                <h4>Character species:</h4>
                <p>{character.species}</p>
            </div>
        })
        return characters;
    }

    return (
        <>
            {data !== "Loading..." ? cards(data) : <p>Loading...</p>}
        </>

    );
}

