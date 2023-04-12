import React from "react";

export default function Header (props) {
  
  return (
    <header>
    <h1 className="title">Dota Memory Game</h1>
    <h3 className="sub-title">Click each card only once!</h3>
     <div className="scores">
      <p>Score : {props.score}</p>
      <p>High Score : {props.highScore}</p>
      </div> 
    </header>
  )
}
