const gameReducer = (state, action) => {
    switch (action.type) {
        case "RESTART_GAME":
            return {
                mode: "cpu",
                score: {
                    1: 0,
                    2: 0,
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
                newGame: true,
                turn: 1,
            };
        case "SET_NEW_GAME":
            return {
                ...state,
                ...action.payload,
            };
        case "ADD_SYMBOL":
            return {
                ...state,
                case: {
                    ...state.case,
                    [action.payload.id]: action.payload.turn,
                },
                turn: action.payload.turn === 1 ? 2 : 1,
            }
        default:
            break;
    }
};

export default gameReducer;
