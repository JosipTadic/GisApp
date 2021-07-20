import React, {useState, createContext, FC, useContext} from 'react';

interface ImapContext {
    multiPolylines: ImultiPoly[],
    multiPolygones: ImultiPoly[]
}

export const MapContext = createContext<ImapContext>({} as ImapContext);

type coordinates = [number, number];

interface ImultiPoly {
    id: string,
    multiPolyline: coordinates[]
}

export const MapProvider:FC = ({children}) => {
    
    const [multiPolylines/*, setmultiPolylines*/] = useState<ImultiPoly[]>(
        [
            {
            
                id: '1',
                multiPolyline:
                [
                    [
                        0.9274,
                        0.8036
                    ],
                    [
                        0.0,
                        0.0
                    ],
                    [
                        50.0,
                        50.0
                    ]
                ]
            },
            {
                id: '2',
                multiPolyline:
                [
                    [
                        0.9274,
                        0.8036
                    ],
                    [
                        10.0,
                        10.0
                    ],
                    [
                        50.0,
                        50.0
                    ]
                ],
            }
        ]
    )
    const [multiPolygones/*, setmultiPolygones*/] = useState<ImultiPoly[]>(
        [
            {
            
                id: '1',
                multiPolyline:
                [
                    [
                        0.9274,
                        0.8036
                    ],
                    [
                        0.0,
                        0.0
                    ],
                    [
                        50.0,
                        50.0
                    ]
                ]
            },
            {
                id: '2',
                multiPolyline:
                [
                    [
                        90.9274,
                        90.8036
                    ],
                    [
                        10.0,
                        10.0
                    ],
                    [
                        50.0,
                        50.0
                    ]
                ],
            }
        ]
    )
    
    return(
        <MapContext.Provider value={{multiPolygones, multiPolylines}}>
            {children}
        </MapContext.Provider>
    )
}
export const useMapContext = () => {
    return useContext(MapContext);
}