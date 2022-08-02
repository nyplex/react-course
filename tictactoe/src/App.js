import { Fragment, useContext, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import NewGame from "./components/Game/NewGame";
import Menu from "./components/Menu/Menu";
import GameContext from "./context/game-context";
 
function App() {
    const gameCtx = useContext(GameContext)
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Fragment>
            {gameCtx.newGame ? <NewGame /> : <Board />}
            {showMenu && (
                <Menu message="OH NO, YOU LOST…" heading="TAKES THE ROUND" />
            )}
        </Fragment>
    );
}

export default App;
