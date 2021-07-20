import React from 'react';
import './App.css';
import MapComponent from './Components/MapComponent';
import InputComponent from './Components/InputComponent';
import { MapProvider } from 'Contexts/MapContext';

function App() {
  return (
    <>
      <MapProvider>
        <MapComponent />
        <InputComponent />
      </MapProvider>
    </>
  );
}

export default App;