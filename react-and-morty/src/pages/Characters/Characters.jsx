import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../api/useData';
import './Characters.css';

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characterResults, setCharacterResults] = useState([]);

  const containerRef = useRef();

  const data = useCharacters(currentPage);

  useEffect(() => {
    if (
      data?.results &&
      data.results[data.results.length-1].name !== characterResults[characterResults.length-1]?.name
    ) {
      setCharacterResults([...characterResults, ...data.results]);
    }
  }, [characterResults, data.results]);

  const onScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrentPage(currentPage + 1);
        console.log(currentPage);
      }
    }
  };

  return (
    <div className="charactersPage">
      <div
        className="charactersContainer"
        onScroll={onScroll}
        ref={containerRef}
      >
        <h1 className="charactersTitle">Characters</h1>
        <div className="charactersList">
          {!data?.results ? (
            <p>{data}</p>
          ) : (
            characterResults.map((character) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const CharacterCard = ({ image, name, species, id }) => {
  return (
    <Link to={`/characters/${id}`} className="charactersCardContainer">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
    </Link>
  );
};

export default Characters;