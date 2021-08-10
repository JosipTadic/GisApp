import React from "react";
import "./App.css";
import MapComponent from "./Components/MapComponent";
import { MapProvider } from "Contexts/MapContext";

function App() {
  return (
    <>
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </>
  );
}

export default App;
