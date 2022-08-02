import React, { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import BoardHeader from "./BoardHeader";
import Card from "./Card";
import classes from "./Board.module.css";
import Score from "../Score/Score";
import GameContext from "../../context/game-context";

const Board = (props) => {
    const gameCtx = useContext(GameContext)
    const cases = gameCtx.case
    return (
        <Fragment>
            <div className={classes.container}>
                <BoardHeader />
                <div className={classes.boardContainer}>
                    <Card id='1' symbol={cases[0]} />
                    <Card id='2' symbol={cases[1]} />
                    <Card id='3' symbol={cases[2]} />
                </div>
                <div className={classes.boardContainer}>
                    <Card id='4' symbol={cases[3]} />
                    <Card id='5' symbol={cases[4]} />
                    <Card id='6' symbol={cases[5]} />
                </div>
                <div className={classes.boardContainer}>
                    <Card id='7' symbol={cases[6]} />
                    <Card id='8' symbol={cases[7]} />
                    <Card id='9' symbol={cases[8]} />
                </div>
                <Score />
            </div>
        </Fragment>
    );
};

export default Board;
