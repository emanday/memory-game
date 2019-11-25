import React from "react";

const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <h1 className="justify-center">MY MEMORY GAME </h1>
    <div className="justify-center">
      <button onClick={restartGame} className="restart-button">
        Restart Game
      </button>
    </div>
  </div>
);

export default Header;
