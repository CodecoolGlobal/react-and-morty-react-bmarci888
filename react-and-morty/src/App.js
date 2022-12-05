import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import CharacterPage from "./pages/Characters/Characters";
import Character from './pages/Characters/Character';
import LocationPage from "./pages/Locations/Locations";
import ClickedPlanet from "./pages/Locations/ClickedPlanet";
import Home from "./pages/Home/Home";


function App() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations" element={<LocationPage page={page} setPage={setPage} planetNumber={planetNumber} setPlanetNumber={setPlanetNumber} />} />
        <Route path={`locations/${planetNumber}`} element={<ClickedPlanet planetNumber={planetNumber} page={page} />} />
      </Routes>
    </div>
  );
}

export default App;
