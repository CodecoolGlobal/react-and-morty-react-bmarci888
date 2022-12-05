import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <h1>LandingPage</h1>
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
    </>
  );
};

export default LandingPage;
