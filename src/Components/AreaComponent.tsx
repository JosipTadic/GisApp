//import React, { useState } from "react";
import { Polyline, Polygon, /*Rectangle, SVGOverlay, Circle*/ } from "react-leaflet";
import {useMapContext} from "Contexts/MapContext";

const limeOptions = { color: 'lime' }

const AreaComponent = () => {
    
    const {multiPolygones, multiPolylines} = useMapContext()

    return(
        <>
            <Polyline pathOptions={limeOptions}  positions={multiPolylines[0].multiPolyline} />
            <Polygon pathOptions={limeOptions}  positions={multiPolygones[1].multiPolyline} />
        </>
    )
}

export default AreaComponent;