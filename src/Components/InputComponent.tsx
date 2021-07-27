import React, { ChangeEventHandler, FC } from "react";
import { ImultiPoly, useMapContext } from "Contexts/MapContext";
import CoordinateInput from "./CoordinateInput";
import TitleText from "./TitleText";
import ButtonComponent from "./ButtonComponent";

interface Props {
  multiPolyline: ImultiPoly;
}

const InputComponent: FC<Props> = ({ multiPolyline }) => {
  const { /*addCoordinates,*/ editCoordinates } = useMapContext();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    editCoordinates(multiPolyline.id, [
      e.target.valueAsNumber,
      multiPolyline.multiPolyline[0][1],
    ]);
  };

  return (
    <>
      <TitleText header="Markers:" />
      <CoordinateInput
        onChange={handleChange}
        type="number"
        min="0"
        max="180"
      />
      <CoordinateInput type="number" min="0" max="180" />

      <ButtonComponent> delete </ButtonComponent>
      <br />
      <ButtonComponent> add new </ButtonComponent>
      <ButtonComponent> save </ButtonComponent>
    </>
  );
};
export default InputComponent;

/*            <TitleText header="Polylines:"/>
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <ButtonComponent value="delete"/><br />
            <ButtonComponent value="add new"/><ButtonComponent value="save"/>

            <TitleText header="Polygones:"/>
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <ButtonComponent value="delete"/><br />
            <ButtonComponent value="add new"/><ButtonComponent value="save"/>

            <TitleText header="Rectangle:"/>
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <ButtonComponent value="delete"/><br />
            <ButtonComponent value="add new"/><ButtonComponent value="save"/>

            <TitleText header="Circle:"/>
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <CoordinateInput type="number" min = "0" max = "180" value="4" />
            <ButtonComponent value="delete"/><br />
            <ButtonComponent value="add new"/><ButtonComponent value="save"/> */
