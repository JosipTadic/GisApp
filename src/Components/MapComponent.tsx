import React from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  LayersControl,
} from "react-leaflet";
import MarkerComponent from "./MarkerComponent";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw";

const MapComponent = () => {
  const position: L.LatLngExpression = [44.9275, 13.80361];
  const zoom: number = 14;

  return (
    <>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap Classic">
            <TileLayer
              attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap Black and White">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <MarkerComponent />
        <FeatureGroup>
          <EditControl position="topleft" draw={{}} />
        </FeatureGroup>
      </MapContainer>
    </>
  );
};

export default MapComponent;
