import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./NewGame.module.css";
import GameContext from "../../context/game-context";
import Circle from "../UI/Circle";
import Cross from "../UI/Cross";
import Button from "../UI/Button";
import H1 from "../UI/H1";
import Paragraph from "../UI/Paragraph";

const NewGame = (props) => {
    const gameCtx = useContext(GameContext);
    const [crossIsSelected, setCrossIsSelected] = useState(true);
    const [circleIsSelected, setCircleIsSelected] = useState(false);

    const handleCrossClick = () => {
        setCrossIsSelected(true);
        setCircleIsSelected(false);
    };

    const handleCircleClick = () => {
        setCrossIsSelected(false);
        setCircleIsSelected(true);
    };

    const startNewGame = (mode) => {
        gameCtx.setNewGame({
            mode: mode,
            players: {
                1: {
                    symbol: crossIsSelected ? "cross" : "circle",
                    isTurn: crossIsSelected ? true : false
                },
                2: {
                    symbol: crossIsSelected ? "circle" : "cross",
                    isTurn: crossIsSelected ? false : true
                }
            },
            newGame: false,
        })
    };

    return (
        <div className={classes["main_container"]}>
            <div className={classes.header}>
                <Cross fill="#31C3BD" />
                <Circle fill="#F2B137" />
            </div>
            <div className={classes.container}>
                <H1 classes={classes["small_heading"]}>PICK PLAYER 1'S MARK</H1>
                <div className={classes["switches_container"]}>
                    <div
                        onClick={handleCrossClick}
                        className={`${classes["switch"]} ${
                            crossIsSelected ? classes["selected"] : ""
                        }`}
                    >
                        <Cross fill="#A8A8A8" />
                    </div>
                    <div
                        onClick={handleCircleClick}
                        className={`${classes["switch"]} ${
                            circleIsSelected ? classes["selected"] : ""
                        }
                            `}
                    >
                        <Circle fill="#A8A8A8" />
                    </div>
                </div>
                <Paragraph classes={classes.span}>
                    REMEMBER : X GOES FIRST
                </Paragraph>
            </div>
            <Button
                onClick={startNewGame.bind(null, "cpu")}
                classes={classes["btn__yellow"]}
            >
                NEW GAME (VS CPU)
            </Button>
            <Button
                onClick={startNewGame.bind(null, "player")}
                classes={classes["btn__blue"]}
            >
                NEW GAME (VS PLAYER)
            </Button>
        </div>
    );
};

export default NewGame;
