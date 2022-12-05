import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import { Routes, Route } from "react-router-dom"
import CharactersPage from "./pages/charactersPage/charactersPage";
import LocationsPage from "./pages/locationsPage/locationsPage";
import Home from "./pages/homePage/homePage";

function App() {
  //const characters = useCharacters(1);
  //const locations = useLocations(1);
  /*console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");*/
  //console.log(locations);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
