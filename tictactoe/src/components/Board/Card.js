import React, { useContext } from "react";
import GameContext from "../../context/game-context";
import Circle from "../UI/Circle";
import Cross from "../UI/Cross";
import classes from "./Card.module.css";

const Card = (props) => {
    const gameCtx = useContext(GameContext);
    let symbol = null;
    if (props.symbol === "cross") {
        symbol = <Cross fill="#31C3BD" size="100%" />;
    } else if (props.symbol === "circle") {
        symbol = <Circle fill="#F2B137" size="100%" />;
    } else {
        symbol = "";
    }

    const addSymbolHandler = () => {
        if(props.symbol) {
            return
        }
        const symbol = gameCtx.players["1"].isTurn
            ? gameCtx.players["1"].symbol
            : gameCtx.players["2"].symbol;
        gameCtx.addSymbol(props.id, symbol);
        if(gameCtx.mode === "cpu") {
            const arr = gameCtx.case
            const keys = []
            for (let k in arr) {
                console.log(arr[k]);
                if(arr[k] === null) {
                    keys.push(k)
                }
            }
            const rdm = keys[Math.floor(Math.random() * keys.length)]
            const obj2 = gameCtx.case
            obj2[rdm] = gameCtx.players["2"].symbol
            gameCtx.cpuTurn(obj2)
        }else{
            gameCtx.nextTurn()
        }
    };

    return (
        <div
            className={`${classes.cardContainer} ${
                props.symbol !== null ? classes.set : classes.unset
            }`}
            onClick={addSymbolHandler}
        >
            {symbol}
        </div>
    );
};

export default Card;
