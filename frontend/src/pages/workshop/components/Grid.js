import React from 'react';
import Card from './Card';
import grid from './grid.module.css';

const Grid = ({cards}) => {
  
  return (
    <div className={`${grid.grid} ${grid.container}`}>
      {cards.map((card)=>(
       <Card  key={card.index} card={card} />
       ))}
    </div>
  )
}

export default Grid;
