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

  const handleClick = index => {
    console.log("hit");
    const squares = [...boardSquares];
    let currentIndex = squares.indexOf(squares[index]);
    console.log(currentIndex);
    squares[currentIndex] = "hit";
    setBoardSquares(squares);
    // console.log("hey", squares.indexOf(squares[index]));
  };

  const renderSquare = index => {
    return (
      <Tiles
        value={boardSquares[index]}
        onClick={() => handleClick(index)}
      ></Tiles>
    );
  };

  return (
    <div>
      <h3>BattleShip Game</h3>
      <div className="board-row">
        {boardSquares.slice(0, 10).map((item, index) => {
          return <div key={item}>{renderSquare(index)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(10, 20).map((item, index) => {
          return <div key={item}>{renderSquare(index + 10)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(20, 30).map((item, index) => {
          return <div key={item}>{renderSquare(index + 20)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(30, 40).map((item, index) => {
          return <div key={item}>{renderSquare(index + 30)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(40, 50).map((item, index) => {
          return <div key={item}>{renderSquare(index + 40)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(50, 60).map((item, index) => {
          return <div key={item}>{renderSquare(index + 50)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(60, 70).map((item, index, key) => {
          return <div key={item}>{renderSquare(index + 60)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(70, 80).map((item, index) => {
          return <div key={item}>{renderSquare(index + 70)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(80, 90).map((item, index) => {
          return <div key={item}>{renderSquare(index + 80)}</div>;
        })}
      </div>
      <div className="board-row">
        {boardSquares.slice(90, 100).map((item, index) => {
          return <div key={item}>{renderSquare(index + 90)}</div>;
        })}
      </div>

      <div className="board-row"></div>
      <div className="board-row"></div>
    </div>
  );
}

export default Board;
