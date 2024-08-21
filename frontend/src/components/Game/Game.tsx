import GameInfo from "../GameInfo";
import Sqaure from "../Square/Sqaure";
import "./Game.css";

function Game() {
  return (
    <div>
      <GameInfo />
      <div className="game-grid">
        <div>
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
        <div>
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
        <div>
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
      </div>
    </div>
  );
}

export default Game;
