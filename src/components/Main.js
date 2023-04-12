import React, { useState } from 'react'
import CardContainer from './CardContainer'
import Header from './Header'
import { cardData } from './cardData'

export default function Main () {
  const [dotaCards, setDotaCards] = useState(cardData)
  const [clicked, setClicked] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState()

  console.log(clicked)
  console.log(score)

  function handleClick (e) {
    const cardName = e.target.parentNode.id
    playRound(cardName)

  }

  function playRound (cardName) {
    if(clicked.includes(cardName)){
      console.log('bad memory')
      resetGame()
    } else {
      setClicked(prev => [...prev, cardName])
      handleScore ()
    }
  }
  function handleScore () {
    setScore(score + 1)
    const bestScore = score + 1
    if( highScore > bestScore){
      return
    }
    setHighScore(bestScore)
  }
  function resetGame () {
    setClicked([])
    setScore(0)
  }

  return (
    <div className='main'>
      <Header 
      score={score} 
      highScore={highScore}
      />
      <CardContainer
      dotaCards={dotaCards} 
      handleClick={handleClick}
      setDotaCards={setDotaCards}
      />
    </div>
  )
}