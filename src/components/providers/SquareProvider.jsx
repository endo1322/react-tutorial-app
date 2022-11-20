import { createContext, useState } from "react";

export const SquareContext = createContext({});

export const SquareProvider = (props) => {
    const { children } = props;
    const [gameInfo, setGameInfo] = useState(
        {
            status: 'Next player: X',
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
    )

    return (
        <SquareContext.Provider value={{ gameInfo, setGameInfo }}>
            {children}
        </SquareContext.Provider>
    )
}