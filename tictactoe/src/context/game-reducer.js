const gameReducer = (state, action) => {
    switch (action.type) {
        case "RESTART_GAME":
            return {
                ...state,
                score: {
                    1: 0,
                    2: 0,
                },
                players: {
                    1: {
                        ...state.players["1"],
                        isTurn:
                            state.players["1"].symbol === "cross"
                                ? true
                                : false,
                    },
                    2: {
                        ...state.players["2"],
                        isTurn:
                            state.players["2"].symbol === "cross"
                                ? true
                                : false,
                    },
                },
                case: {
                    a: null,
                    b: null,
                    c: null,
                    d: null,
                    e: null,
                    f: null,
                    g: null,
                    h: null,
                    i: null,
                },
                newGame: false,
            };
        case "SET_NEW_GAME":
            return {
                ...state,
                ...action.payload,
            };
        case "ADD_SYMBOL":
            const key = action.payload.index
            const symbol = action.payload.symbol
            const obj = state.case
            obj[key] = symbol
            return {
                ...state,
                case: obj,
            };

        case "CPU_TURN":
            return {
                ...state,
                case: action.playload,
            };

        case "NEXT_TURN":
            return {
                ...state,
                players: {
                    1: {
                        ...state.players["1"],
                        isTurn: !state.players["1"].isTurn,
                    },
                    2: {
                        ...state.players["2"],
                        isTurn: !state.players["2"].isTurn,
                    },
                },
            };
        default:
            break;
    }
};

export default gameReducer;
