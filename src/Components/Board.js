import React, { useState } from "react";
import Tiles from "./Tiles";
import "../styles.css";

function Board() {
  //state
  //boardState

  const tilePositions = array => {
    const arr = [];
    array.map(letter => {
      for (let i = 1; i <= 10; i++) {
        arr.push(letter + i);
      }
    });
    return arr;
  };

  const boardPositions = tilePositions([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J"
  ]);

  const [boardSquares, setBoardSquares] = useState(boardPositions);
  const [gameStatus, setGameStatus] = useState("setup");

  const handleHit = index => {
    console.log("hit");
    const squares = [...boardSquares];
    let currentIndex = squares.indexOf(squares[index]);
    console.log(currentIndex);
    squares[currentIndex] = "hit";
    setBoardSquares(squares);
  };

  const resetGame = () => {
    setGameStatus("setup");
    setBoardSquares(boardPositions);
  };

  const handleSetShip = index => {
    console.log("yo");
    const squares = [...boardSquares];
    let currentIndex = squares.indexOf(squares[index]);
    console.log("current", currentIndex);
    squares[currentIndex] = "ship";
    setBoardSquares(squares);
  };

  const renderSquare = index => {
    return (
      <Tiles
        value={boardSquares[index]}
        onClick={() =>
          gameStatus === "setup" ? handleSetShip(index) : handleHit(index)
        }
      ></Tiles>
    );
  };

  const startGame = () => {
    setGameStatus("started");
  };
  return (
    <div>
      <h3>BattleShip Game</h3>
      <div className="board-row">
        {boardSquares.slice(0, 10).map((item, index) => {
          return <div key={index}>{renderSquare(index)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(10, 20).map((item, index) => {
          return <div key={index}>{renderSquare(index + 10)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(20, 30).map((item, index) => {
          return <div key={index}>{renderSquare(index + 20)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(30, 40).map((item, index) => {
          return <div key={index}>{renderSquare(index + 30)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(40, 50).map((item, index) => {
          return <div key={index}>{renderSquare(index + 40)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(50, 60).map((item, index) => {
          return <div key={index}>{renderSquare(index + 50)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(60, 70).map((item, index) => {
          return <div key={index}>{renderSquare(index + 60)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(70, 80).map((item, index) => {
          return <div key={index}>{renderSquare(index + 70)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(80, 90).map((item, index) => {
          return <div key={index}>{renderSquare(index + 80)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(90, 100).map((item, index) => {
          return <div key={item}>{renderSquare(index + 90)}</div>;
        })}
      </div>
      <button onClick={() => startGame()}>Click to Start Game </button>
      <button onClick={() => resetGame()}>Click to Reset the Game </button>
      <form>
        <label>
          Ship Position
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Board;
