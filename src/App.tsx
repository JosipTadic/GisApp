import React from "react";
import "./App.css";
import MapComponent from "./Components/MapComponent";
import InputComponents from "./Components/InputComponents";
import { MapProvider } from "Contexts/MapContext";

function App() {
  return (
    <>
      <MapProvider>
        <MapComponent />
        <InputComponents />
      </MapProvider>
    </>
  );
}

export default App;
