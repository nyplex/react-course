import React, { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import BoardHeader from "./BoardHeader";
import Card from "./Card";
import classes from "./Board.module.css";
import Score from "../Score/Score";
import GameContext from "../../context/game-context";

const Board = (props) => {
    const gameCtx = useContext(GameContext);
    const cases = gameCtx.case;
    return (
        <Fragment>
            <div className={classes.container}>
                <BoardHeader />
                <div className={classes.boardContainer}>
                    <Card id="a" symbol={cases["a"]} />
                    <Card id="b" symbol={cases["b"]} />
                    <Card id="c" symbol={cases["c"]} />
                </div>
                <div className={classes.boardContainer}>
                    <Card id="d" symbol={cases["d"]} />
                    <Card id="e" symbol={cases["e"]} />
                    <Card id="f" symbol={cases["f"]} />
                </div>
                <div className={classes.boardContainer}>
                    <Card id="g" symbol={cases["g"]} />
                    <Card id="h" symbol={cases["h"]} />
                    <Card id="i" symbol={cases["i"]} />
                </div>
                <Score />
            </div>
        </Fragment>
    );
};

export default Board;
