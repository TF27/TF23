import React from 'react';
import Card from './Card1';

const Grid = ({cards}) => {

  const sortedCards = cards.slice().sort((a, b) => b.workshop_id - a.workshop_id);
  
  return (
    <>
      <div className="technorion_cards">
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row">
          {sortedCards.map((card) => (
              <Card key={card.index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
