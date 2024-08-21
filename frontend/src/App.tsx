import "./App.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="jersey-10-regular">
      <h1 className="heading">TIC-TAC-TOE</h1>
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
