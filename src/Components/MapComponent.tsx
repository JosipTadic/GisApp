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
              attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayersControl.BaseLayer name="OpenTopoMap">
              <TileLayer
                attribution='&copy; Kartendaten: © <a href="http://osm.org/copyright"> OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: ©<a href="http://opentopomap.org/">OpenTopoMap</a>  <a href="https://creativecommons.org/licenses/by-sa/3.0/">(CC-BY-SA)</a>'
                url="https://c.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Humanitarian map style">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | base map by  <a href="http://www.openstreetmap.fr/mentions-legales/">OpenStreetMap France</a> , under  <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">CC BY-SA license</a>  '
              url="http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wmflabs Hillshading">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, by <a href="https://outreachdashboard.wmflabs.org/">wmflabs</a> under  <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA license</a>'
              url="http://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wmflabs OSM Black and White">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, by <a href="https://outreachdashboard.wmflabs.org/">wmflabs</a> under  <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA license</a>'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wmflabs Hike and Bike">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, by <a href="https://outreachdashboard.wmflabs.org/">wmflabs</a> under  <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA license</a>'
              url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wmflabs OSM no labels">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, by <a href="https://outreachdashboard.wmflabs.org/">wmflabs</a> under  <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA license</a>'
              url="https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Öpnvkarte Transport map">
            <TileLayer
              attribution='&copy;  contributors Map data © by <a href="http://osm.org/copyright">OpenStreetMap</a> contributors licenced under <a href="http://opendatacommons.org/licenses/odbl/1.0/">ODbL 1.0.</a>
              This map is available under <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> licence (© by <a href="http://memomaps.de/">MeMoMaps</a>).'
              url="http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Stamen - Toner map">
            <TileLayer
              attribution='&copy;  Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
              url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
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
