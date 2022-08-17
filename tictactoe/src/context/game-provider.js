import React, { useReducer } from "react";
import GameContext from "./game-context";
import gameReducer from "./game-reducer";

export const defaultSetting = {
    mode: "cpu",
    score: {
        1: 0,
        2: 0,
    },
    case: {
        a: null,
        b: null,
        c: null,
        d: null,
        e: null,
        f: null,
        g: null,
        h: null,
        i: null,
    },
    newGame: true,
    turn: 1,
};

const GameProvider = (props) => {
    const [gameState, dispatchGame] = useReducer(gameReducer, {
        mode: "cpu",
        score: {
            1: 0,
            2: 0
        },
        newGame: true,
        case: {
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
            f: null,
            g: null,
            h: null,
            i: null,
        },
        turn: 1,
    });

    const restartGame = () => {
        dispatchGame({
            type: "RESTART_GAME",
        });
    };
    const setNewGame = (obj) => {
        dispatchGame({
            type: "SET_NEW_GAME",
            payload: obj,
        })
    }
    const addSymbol = (id) => {
        dispatchGame({
            type: "ADD_SYMBOL",
            payload: {
                id: id,
                turn: gameState.turn,
            },
        });
    }

    const cpuAddSymbol = () => {
        dispatchGame({
            type: "CPU_ADD_SYMBOL",
        })
    }

    const gameContext = {
        mode: gameState.mode,
        score: gameState.score,
        case: gameState.case,
        restartGame: restartGame,
        setNewGame: setNewGame,
        newGame: gameState.newGame,
        turn: gameState.turn,
        addSymbol: addSymbol,
        CpuAddSymbol: cpuAddSymbol,
    };

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameProvider;
