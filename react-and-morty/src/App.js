import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import CharactersPage from "./pages/charactersPage/charactersPage";
import LocationsPage from "./pages/Locations/Locations";
import Home from "./pages/homePage/homePage";
import ClickedPlanet from "./pages/Locations/ClickedPlanet";


function App() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/locations" element={<LocationsPage
          page={page}
          setPage={setPage}
          planetNumber={planetNumber}
          setPlanetNumber={setPlanetNumber} />} />
        <Route path={`locations/${planetNumber}`} element={<ClickedPlanet
          planetNumber={planetNumber}
          page={page} />} />
      </Routes>
    </div>
  );
}

export default App;
