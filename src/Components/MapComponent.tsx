import React from 'react';
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerComponent from './MarkerComponent';
import AreaComponent from './AreaComponent';

const MapComponent = () => {

    const position : LatLngExpression = [44.9275,13.80361];
    const zoom : number = 14;

    return(
        <>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AreaComponent />
                <MarkerComponent />
            </MapContainer>
        </>
    )
}

export default MapComponent;