import React, { useState, useEffect } from 'react';
import style from './card.module.css';
import { UserAuth } from "../../contexts/AuthContext";

const Card = ({ email, team1, team2, team1_image, team2_image, time, points, winner, matchId, onBet }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [betMade, setBetMade] = useState(false); // State to track whether the user has made a bet
  const [userHasBet, setUserHasBet] = useState(false); // State to track whether the user has made a bet on this match

  const { user } = UserAuth();
  const userEmail = user?.email;

  const handleBet = () => {
    if (selectedTeam === null) {
      alert('Please select a team before betting.');
      return;
    }
    onBet(matchId, selectedTeam, userEmail);
    setBetMade(true);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/robowars-bet/has_user_made_bet/${userEmail}/${matchId}/`);
        if (response.ok) {
          const data = await response.json();
          setUserHasBet(data.user_has_bet);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [userEmail, matchId]);

  return (
    <div className={style.betting}>
    <div className={style.bettingcard}>
      <div className={style.teamcontainer}>
        <img src={team1_image} alt={team1} className={style.teamlogo} />
        <span className={style.teamname}>{team1}</span>
      </div>
      <div className={style.vscontainer}>
        <span className={style.vstext}> <p>&nbsp; VS&nbsp; </p> </span>
      </div>
      <div className={style.teamcontainer}>
        <img src={team2_image} alt={team2} className={style.teamlogo} />
        <span className={style.teamname}>{team2}</span>
      </div>
    </div>


    <div className={style.bettinginfo}>
        <div className={style.betpricecontainer}>
        {winner !== '' && <p>Winner: {winner === '1' ? team1 : team2}</p>}
          <span className={style.matchtime}>Time: {time}</span>
          <span className={style.betprice}>Reward: {points} points</span>
        </div>
              {winner === '' && (
        <>
          {betMade || userHasBet ? (
            <p>Done</p>
          ) : (
            <>
              <select
                className={style.teamDropdown}
                onChange={(e) => setSelectedTeam(e.target.value)}
                value={selectedTeam}
              >
                <option value="">Select a Team</option>
                <option value="1">{team1}</option>
                <option value="2">{team2}</option>
              </select>
              <button className={style.betbutton} onClick={handleBet}>
                Bet Now
              </button>
            </>
          )}
        </>
      )}


        {winner!=='' && <p>Completed</p>}
      </div>
    </div>
  );
};

export default Card;