import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../api/useData';
import './Character.css';

const Character = () => {
  const { id } = useParams();
  const characterData = useCharacter(id);
  console.log(characterData);
  if (!characterData?.name) {
    return characterData;
  }

  const { gender, image, location, name, origin, species, status } =
    characterData;

  return (
    <div className="characterPage">
      <div className="characterCard">
        <div className='characterInfo'>
          <img src={image} alt={name} height="400px"/>
        </div>
        <div className='characterInfo'>
          <h1>{name}</h1>
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Location: {location.name}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;