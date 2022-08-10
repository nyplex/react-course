import React, { useReducer } from "react";
import GameContext from "./game-context";
import gameReducer from "./game-reducer";

export const defaultSetting = {
    players: {},
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
};

const GameProvider = (props) => {
    const [gameState, dispatchGame] = useReducer(gameReducer, {
        players: {},
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
    const addSymbol = (index, symbol) => {
        dispatchGame({
            type: "ADD_SYMBOL",
            payload: {
                index,
                symbol,
            },
        });
    }
    const nextTurn = () => {
        dispatchGame({
            type: "NEXT_TURN",
        });
    }
    const cpuTurn = (obj) => {
        dispatchGame({
            type: "CPU_TURN",
            playload: obj
        })
    }
    const gameContext = {
        players: gameState.players,
        mode: gameState.mode,
        score: gameState.score,
        case: gameState.case,
        restartGame: restartGame,
        setNewGame: setNewGame,
        newGame: gameState.newGame,
        addSymbol: addSymbol,
        nextTurn: nextTurn,
        cpuTurn: cpuTurn,
    };

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameProvider;
