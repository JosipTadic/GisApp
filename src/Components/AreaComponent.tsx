import React from "react";
import { Circle, Polyline, Polygon, Rectangle, SVGOverlay } from "react-leaflet";

/*interface multiPolylines {
    id: string,
    multiPolyline2: Polyline1[]
}*/

type Polyline1 = [number, number];

const circleCenter : Polyline1 = [45.02759, 14];

const multiPolyline1 : Polyline1[] = [
    [
        0.9274,
        0.8036
    ],
    [
        45.9300,
        10.8036
    ],
    [
        90.9300,
        20.8036
    ]
];
const multiPolyline2 : Polyline1[] = [
    [
        0.9274,
        0.8036
    ],
    [
        45.9300,
        10.8036
    ],
    [
        45.92759,
        13.80362
    ],
    [
        49.92759,
        15.80362
    ]
];
const multiPolyline3 : Polyline1[] = [
    [
        0.9274,
        0.8036
    ],
    [
        45.9300,
        15.8036
    ],
    [
        46.92759,
        13.80362
    ]
];
const rectangleCoordinates : Polyline1[] = [
    [
        44.92759,
        13.80362
    ],
    [
        45.92759,
        14.80362
    ]
]
const rectangleCoordinates1 : Polyline1[] = [
    [
        44.02759,
        14.70362
    ],
    [
        44.90,
        14.80362
    ]
]
const fillBlueOptions = { fillColor: 'blue' }
const limeOptions = { color: 'lime' }
const blackOptions = { color: 'grey' }



const AreaComponent = () => {
    console.log(multiPolyline1)
    return(
        <>
            <Polyline pathOptions={limeOptions}  positions={multiPolyline1} />
            <Polyline pathOptions={limeOptions}  positions={multiPolyline2} />
            <Polygon pathOptions={limeOptions}  positions={multiPolyline3} />
            <Circle center={circleCenter} pathOptions={fillBlueOptions} radius={2000} />
            <Rectangle bounds={rectangleCoordinates} pathOptions={blackOptions} />
            <SVGOverlay attributes={{ stroke: 'red' }} bounds={rectangleCoordinates1}>
                <rect x="0" y="0" width="100%" height="90%" fill="blue" />
                <circle r="5" cx="10" cy="10" fill="red" />
                <text x="0%" y="3%" stroke="white">
                  text
                </text>
            </SVGOverlay>
        </>
    )
}

export default AreaComponent;