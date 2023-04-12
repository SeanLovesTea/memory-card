import React from 'react'
import Cards from './Cards'

export default function CardContainer (props) {
  console.log(props)
  return (
    <div >
      <Cards 
      dotaCards={props.dotaCards}
      handleClick={props.handleClick}
      setDotaCards={props.setDotaCards}
      />
    </div>
  )
}
