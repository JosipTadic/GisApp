import React from 'react';
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const MapComponent = () => {

    const pinIcon : L.DivIcon = L.divIcon({
        className: "marker-component-icon",
        popupAnchor: [15, 0],
        iconAnchor: [0, 0],
        iconSize: [25, 25]
    });

    interface MarkerComponent {
        id: string,
        header: string,
        firstText: string,
        secondText: string,
        thirdText: string,
        fourthText?: string
        lat: number,
        lon: number,
    }

    const icons : MarkerComponent[] = [
        {
            id: '1',
            header: "header",
            firstText: "firstText1",
            secondText: "secondText",
            thirdText: "thirdText",
            fourthText: "fourthText",
            lat: 44.92759, 
            lon: 13.80362
        },
        {
            id: '2',
            header: "header",
            firstText: "firstText2",
            secondText: "secondText",
            thirdText: "thirdText",
            fourthText: "fourthText",
            lat: 44.9274, 
            lon: 13.8036
        },
        {
            id: '3',
            header: "header",
            firstText: "firstText3",
            secondText: "secondText",
            thirdText: "thirdText",
            fourthText: "fourthText",
            lat: 44.9279, 
            lon: 13.803619
        }
    ];
    
    const position : LatLngExpression = [44.9275,13.80361];
    const zoom : number = 14;

    return(
        <>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {icons.map((icon, id) => 
                <Marker position={[icon.lat, icon.lon]}  icon={pinIcon} key={id} title={icon.firstText}>
                    <Popup>
                    <h4>{icon.header}</h4>
                    <strong>{icon.firstText} testText1 {icon.secondText}</strong><br />
                    <p><strong>{icon.thirdText}</strong></p><br />
                    <em>{icon.fourthText}</em>
                    </Popup>
                </Marker>
                )}
            </MapContainer>
        </>
    )
}

export default MapComponent;