import { createContext, useState } from "react";

export const SquareContext = createContext({});

export const SquareProvider = (props) => {
    const { children } = props;

    const nullList = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ];
    const [gameInfo, setGameInfo] = useState(
        {
            status: 'Next player: X',
            square: nullList,
            xIsNext: true
        }
    )


    return (
        <SquareContext.Provider value={{ gameInfo, setGameInfo }}>
            {children}
        </SquareContext.Provider>
    )
}