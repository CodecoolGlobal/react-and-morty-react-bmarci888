import React from "react";
import { useCharacters, useLocations } from "./api/useData";
import { Routes, Route } from "react-router-dom"
import CharacterPage from "./pages/Characters/Characters";
import LocationPage from "./pages/Locations/Locations";
import Home from "./pages/Home/Home";
import Character from './pages/Characters/Character';

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return  (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;
