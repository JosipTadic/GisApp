import React, { useState, createContext, FC, useContext } from "react";

interface ImapContext {
  multiPolylines: ImultiPoly[];
  multiPolygones: ImultiPoly[];
  addCoordinates: (e: number) => void;
  editCoordinates: (id: string, coordinateValue: coordinates) => void;
  saveCoordinates: () => void;
  deleteCoordinates: () => void;
}

export const MapContext = createContext<ImapContext>({} as ImapContext);

type coordinates = [number, number];

export interface ImultiPoly {
  id: string;
  multiPolyline: coordinates[];
}

export const MapProvider: FC = ({ children }) => {
  const addCoordinates = () => {};
  const editCoordinates = (id: string, coordinateValue: coordinates) => {
    setMultiPolylines((prevState) => {
      const found = prevState.find((multiPolyline) => id === multiPolyline.id);
      if (!found) return prevState;
      found.multiPolyline[0] = coordinateValue;

      const copy = prevState.slice();
      copy[0] = found;

      return copy;
    });
  };
  const saveCoordinates = () => {};
  const deleteCoordinates = () => {};

  const [multiPolylines, setMultiPolylines] = useState<ImultiPoly[]>([
    {
      id: "1",
      multiPolyline: [
        [0.9274, 0.8036],
        [0.0, 0.0],
        [50.0, 50.0],
      ],
    },
    {
      id: "2",
      multiPolyline: [
        [0.9274, 0.8036],
        [10.0, 10.0],
        [50.0, 50.0],
      ],
    },
  ]);
  const [multiPolygones /*setmultiPolygones*/] = useState<ImultiPoly[]>([
    {
      id: "1",
      multiPolyline: [
        [0.9274, 0.8036],
        [0.0, 0.0],
        [50.0, 50.0],
      ],
    },
    {
      id: "2",
      multiPolyline: [
        [90.9274, 90.8036],
        [10.0, 10.0],
        [50.0, 50.0],
      ],
    },
  ]);

  return (
    <MapContext.Provider
      value={{
        multiPolygones,
        multiPolylines,
        addCoordinates,
        editCoordinates,
        deleteCoordinates,
        saveCoordinates,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
export const useMapContext = () => {
  return useContext(MapContext);
};

/*

*/
