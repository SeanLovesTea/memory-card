import React from 'react'

export default function Cards (props) {

  const newArr = props.dotaCards
  newArr.sort(() => Math.random() - 0.5)

  return (
    <div className='container' >
      {newArr.map(hero => {
        return (
          <div  
          className="card" 
          key={hero.name}
          id={hero.name}
          onClick={(e) => props.handleClick(e)}
          >
            <img src={hero.url}></img>
          </div>
      )})}
    </div>
  )
}

