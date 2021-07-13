import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface MarkerComponents {
    id: string,
    header: string,
    firstText: string,
    secondText: string,
    thirdText: string,
    fourthText?: string,
    lat: number,
    lon: number
}

const pinIcon : L.DivIcon = L.divIcon({
    className: "marker-component-icon",
    popupAnchor: [15, 0],
    iconAnchor: [0, 0],
    iconSize: [25, 25]
});

const icons : MarkerComponents[] = [
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
const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]
const MarkerComponent = () => {
    console.log(multiPolyline)
    console.log(icons)
    return(
        <>
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
        </>
    )
}

export default MarkerComponent;