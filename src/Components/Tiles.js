import React from "react";
import "../styles.css";

export default function Tiles(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
