import { useMapContext } from "Contexts/MapContext";
import React from "react";
import InputComponent from "./InputComponent";

function InputComponents() {
  const { multiPolylines } = useMapContext();
  return (
    <div>
      {multiPolylines.map((mPolyline) => (
        <InputComponent multiPolyline={mPolyline} key={mPolyline.id} />
      ))}
    </div>
  );
}

export default InputComponents;
