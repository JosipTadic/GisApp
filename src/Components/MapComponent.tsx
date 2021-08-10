import React from "react";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import MarkerComponent from "./MarkerComponent";
import { EditControl } from "react-leaflet-draw";

const MapComponent = () => {
  const position: LatLngExpression = [44.9275, 13.80361];
  const zoom: number = 14;

  return (
    <>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerComponent />

        <FeatureGroup>
          <EditControl position="topleft" draw={{}} />
        </FeatureGroup>
      </MapContainer>
    </>
  );
};

export default MapComponent;
