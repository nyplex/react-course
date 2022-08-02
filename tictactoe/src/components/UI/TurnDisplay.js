import React from "react";
import classes from "./TurnDisplay.module.css";

const TurnDisplay = (props) => {
    return <div className={classes.container}>{props.children}</div>;
};

export default TurnDisplay;
