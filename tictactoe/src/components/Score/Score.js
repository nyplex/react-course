import React from "react";
import classes from "./Score.module.css";

const Score = () => {
    return (
        <div className={classes.container}>
            <div className={`${classes.scoreDisplay} ${classes.blue}`}>
                <p>
                    <span>X (YOU)</span>
                    15
                </p>
            </div>
            <div className={`${classes.scoreDisplay} ${classes.gray}`}>
                <p>
                    <span>TIES</span>
                    32
                </p>
            </div>
            <div className={`${classes.scoreDisplay} ${classes.yellow}`}>
                <p>
                    <span>0 (CPU)</span>
                    11
                </p>
            </div>
        </div>
    );
};

export default Score;
