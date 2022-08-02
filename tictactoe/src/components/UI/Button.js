import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.classes} type={props.type}>
            {props.children}
        </button>
    );
};

export default Button;
