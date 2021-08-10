import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
interface MarkerComponents {
  id: string;
  header: string;
  firstText: string;
  secondText?: string;
  lat: number;
  lon: number;
}

const pinIcon: L.DivIcon = L.divIcon({
  className: "marker-component-icon",
  popupAnchor: [15, 0],
  iconAnchor: [0, 0],
  iconSize: [25, 25],
});

const icons: MarkerComponents[] = [
  {
    id: "1",
    header: "header",
    firstText: "firstText1",
    secondText: "secondText",
    lat: 44.92759,
    lon: 13.80362,
  },
  {
    id: "2",
    header: "header",
    firstText: "firstText2",
    secondText: "secondText",
    lat: 44.9274,
    lon: 13.8036,
  },
  {
    id: "3",
    header: "header",
    firstText: "firstText3",
    secondText: "secondText",
    lat: 44.9279,
    lon: 13.803619,
  },
  {
    id: "4",
    header: "header",
    firstText: "firstText3",
    secondText: "secondText",
    lat: 44.9279,
    lon: 13.903619,
  },
];

const MarkerComponent = () => {
  return (
    <>
      {icons.map((icon, id) => (
        <Marker
          position={[icon.lat, icon.lon]}
          icon={pinIcon}
          key={id}
          title={icon.firstText}
        >
          <Popup>
            <h4>{icon.header}</h4>
            <strong>
              {icon.firstText} testText1 {icon.secondText}
            </strong>
            <br />
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkerComponent;
