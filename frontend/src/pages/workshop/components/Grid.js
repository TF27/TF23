import React from 'react';
import Card from './Card1';
import styles from './styles.module.css';
import head from '../img/workshop_header.png';

const Grid = ({cards}) => {

  const sortedCards = cards.slice().sort((a, b) => b.workshop_id - a.workshop_id);
  
  return (
    <>
      <div className="technorion_cards">
        <div className={styles.head}>
          <img src={head} alt="header"/>
        </div>
        <h2 style={{marginTop: '15px'}}>Team discount and Early bird offer extended till 18th December!</h2>
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row" style={{paddingBottom: '80px'}}>
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
