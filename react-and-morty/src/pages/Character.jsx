import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../api/useData';

const Character = () => {
  const { id } = useParams();
  const characterData = useCharacter(id);
  console.log(characterData);

  return <h1>{!characterData?.name ? characterData : characterData.name}</h1>;
};

export default Character;
