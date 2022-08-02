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
        const symbol = gameCtx.players["1"].isTurn
            ? gameCtx.players["1"].symbol
            : gameCtx.players["2"].symbol;
        gameCtx.addSymbol(props.id - 1, symbol);
        gameCtx.nextTurn()
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
