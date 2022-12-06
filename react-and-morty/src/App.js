import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import { Routes, Route } from "react-router-dom"
import CharacterPage from "./pages/Characters";
import LocationPage from "./pages/Locations";
import Home from "./pages/Home";

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
        <Route path="/locations" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;
