import React, { useContext } from "react";
import GameContext from "../../context/game-context";
import Circle from "../UI/Circle";
import Cross from "../UI/Cross";
import classes from "./Card.module.css";

const Card = (props) => {
    const gameCtx = useContext(GameContext);
    console.log(gameCtx);
    let symbol = null;
    if (props.symbol === 1) {
        symbol = <Cross fill="#31C3BD" size="100%" />;
    } else if (props.symbol === 2) {
        symbol = <Circle fill="#F2B137" size="100%" />;
    } else {
        symbol = null;
    }

    const AddSymbolHandler = (id) => {
        gameCtx.addSymbol(id)
        if(gameCtx.mode === "cpu") {
            setTimeout(() => {
                console.log("cpu turn");
            }, 1000);
        }
    }

    return (
        <div
            className={`${classes.cardContainer} ${
                props.symbol !== null ? classes.set : classes.unset
            }`}
            onClick={AddSymbolHandler.bind(null, props.id)}
        >
            {symbol}
        </div>
    );
};

export default Card;
