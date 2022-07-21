import { useReducer } from "react";

const initialInputState = {
    value: "",
    isBlurd: false,
}

const inputStateReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                value: action.value,
            };
        case "BLUR":
            return {
                ...state,
                isBlurd: true,
            };
        case "RESET":
            return {
                ...state,
                value: "",
                isBlurd: false,
            };
        default:
            return state;
    }
}

const useInput = (validate) => {
    const [inputState, disptach] = useReducer(inputStateReducer, initialInputState);
    
    const isValid = validate(inputState.value);
    const hasError = !isValid && inputState.isBlurd;

    const changeValueHandler = (event) => {
        disptach({
            type: "INPUT",
            value: event.target.value,
        })
    }
    const onBlurHandler = (event) => {
        disptach({
            type: "BLUR",
        })
    }
    const reset = () => {
        disptach({
            type: "RESET",
        })
    }

    return {
        value: inputState.value,
        changeValueHandler,
        onBlurHandler,
        reset,
        isValid,
        hasError,
    }
};

export default useInput;