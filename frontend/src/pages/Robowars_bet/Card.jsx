import React, { useState, useEffect } from 'react';
import style from './card.module.css';
import { UserAuth } from "../../contexts/AuthContext";

const Card = ({ email, team1, team2, team3,team4, team5, team6, team1_image, team2_image, team3_image,team4_image, team5_image, team6_image,status, time, points, winner, matchId, onBet }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [betMade, setBetMade] = useState(false); // State to track whether the user has made a bet
  const [userHasBet, setUserHasBet] = useState(false); // State to track whether the user has made a bet on this match
  const [isBlinking, setIsBlinking] = useState(false);

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
    // Set up a timer to toggle the blinking effect every 500 milliseconds
    const blinkTimer = setInterval(() => {
      setIsBlinking((prevBlinking) => !prevBlinking);
    }, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(blinkTimer);
  }, []);
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
   
       <div className={style.bettingcard3}>
        {/* Team 1 */}
        {team1 && (
       <div className={style['match-card-team-container']}>
       <img src={team1_image} alt="Team 1" className={style['match-card-team-image']} />
       <p className={style['match-card-team-name']}>{team1}</p>
   </div>
        )}

   {/* Team 2 */}
   {team2 && (
   <div className={style['match-card-team-container']}>
       <img src={team2_image} alt="Team 2" className={style['match-card-team-image']} />
       <p className={style['match-card-team-name']}>{team2}</p>
   </div>
   )}

   {/* Team 3 */}
   {team3 && (
       <div className={style['match-card-team-container']}>
           <img src={team3_image} alt="Team 3" className={style['match-card-team-image']} />
           <p className={style['match-card-team-name']}>{team3}</p>
       </div>
   )}

   {/* Team 4 */}
   {team4 && (
       <div className={style['match-card-team-container']}>
           <img src={team4_image} alt="Team 4" className={style['match-card-team-image']}/>
           <p className={style['match-card-team-name']}>{team4}</p>
       </div>
   )}

   {/* Team 5 */}
   {team5 && (
       <div className={style['match-card-team-container']}>
           <img src={team5_image} alt="Team 5" className={style['match-card-team-image']}/>
           <p className={style['match-card-team-name']}>{team5}</p>
       </div>
   )}

   {/* Team 6 */}
   {team6 && (
       <div className={style['match-card-team-container']}>
           <img src={team6_image} alt="Team 6" className={style['match-card-team-image']} />
           <p className={style['match-card-team-name']}>{team6}</p>
       </div>
   )}
       </div>


      <div className={style.bettinginfo}>
        <div className={style.betpricecontainer}>
          {winner !== '' && <p>Winner: {winner === '1' ? team1 : winner === '2' ? team2 : team3}</p>}
          <span className={style.matchtime}>Time: {time}</span>
          <span className={style.betprice}>Reward: {points} points</span>
        </div>

        {status === 'Betting-On' && (
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
                  {team3 && <option value="3">{team3}</option>}
                  {team4 && <option value="4">{team4}</option>}
                  {team5 && <option value="5">{team5}</option>}
                  {team6 && <option value="6">{team6}</option>}
                </select>

                <button className={style.betbutton} onClick={handleBet}>
                  Bet Now
                </button>
              </>
            )}
          </>
        )}

<div className={`${style.blinkingText} ${isBlinking ? style.blink : ''}`}>  
        {status === 'Future' && <p>Betting will start <br/>30 min before match</p>}
        {status === 'Ongoing' && <p>Live</p>}
        
</div>
{status === 'Finished' && <p style={{fontSize:'1.5rem'}}>Completed</p>}
      </div>
    </div>
  );
};

export default Card;
