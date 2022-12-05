import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../api/useData';

const Characters = () => {
  const data = useCharacters();

  return (
    <>
      <h1>Characters</h1>
      {!data?.results ? (
        <p>{data}</p>
      ) : (
        <ul>
          {data.results.map((character) => (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Characters;
