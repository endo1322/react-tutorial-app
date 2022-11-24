import { createContext, useState } from "react";

export const SquareContext = createContext({});

export const SquareProvider = (props) => {
    const { children } = props;
    const [gameInfo, setGameInfo] = useState(
        {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        }
    )

    return (
        <SquareContext.Provider value={{ gameInfo, setGameInfo }}>
            {children}
        </SquareContext.Provider>
    )
}