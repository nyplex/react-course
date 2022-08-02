import "./App.css";
import Gallery from "./components/Slider";

function App() {
    return (
        <div className="App">
            <h1>Hello world</h1>
            <div style={{width: '500px'}}>
                <Gallery />
            </div>
        </div>
    );
}

export default App;
