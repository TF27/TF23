import React from 'react';
import Card from './Card1';

const Grid = ({cards}) => {
  
  return (
    // <div className={`${grid.grid} ${grid.container}`}>
    //   {cards.map((card)=>(
    //    <Card  key={card.index} card={card} />
    //    ))}
    // </div>
    <>
      <div className="technorion_cards">
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row">
            {cards.map((card) => (
              <Card key={card.index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
