import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import styles from './home.module.css';
import { UserAuth } from "../../contexts/AuthContext";

const Home = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const  id  = searchParams.get('id');
  const numericId = parseInt(id, 10);
  {/*robowars - 1
     ift - 2
     drone racing - 3
    */}
  const { user } = UserAuth();
  const userEmail = user?.email;
  const userName = user?.displayName;

  //showing list of all matches
  const [matchesByDay, setMatchesByDay] = useState({});
  const [totalPoints, setTotalPoints] = useState(null);

  useEffect(() => {  
  const fetchUserTotalPoints = async () => {
    try {
      const response = await fetch('/robowars-bet/user/', {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user_email: userEmail,
              name: userName,
              id: id
          }),
      });

      if (response.ok) {
        const data = await response.json();
        setTotalPoints(data[`total_points_${id}`]);
      } else {
        const errorData = await response.json(); // Attempt to parse error response
        console.error('Error fetching user total points:', errorData);
      }
    } catch (error) {
      console.error('Error fetching user total points:', error);
    }
  };
    fetchUserTotalPoints(); 
  }, [userEmail,userName]);


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/robowars-bet/matches/'); 
          const data = await response.json();
  
          // Group matches by day
          const groupedMatches = {};
          data.forEach(match => {
            const day = match.day;
            if (!groupedMatches[day]) {
              groupedMatches[day] = [];
            }
            groupedMatches[day].push(match);
          });
  
          setMatchesByDay(groupedMatches);
          
        } catch (error) {
          console.error('Error fetching data from the backend:', error);
        }
      };  
      fetchData();
    }, [id]);
  
  //for doing function on clicking Bet Now button
  const handleBet = async (matchId, selectedTeam, userEmail) => {
    try {
        const response = await fetch(`/robowars-bet/select-team/${matchId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                selected_team: selectedTeam,
                user_email: userEmail,  // Include the user's email in the request
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            console.log('Bet successful!');
        } else {
            console.error('Error placing bet:', response.error, response.statusText);
        }
    } catch (error) {
        console.error('Error placing bet:', error);
    }
};


  return (
    <div className={styles['betting-grid']}>
        <div className={styles['user-section']}>
          <h2>{userName}<br/>Your Points: {totalPoints}</h2>
        </div>
  
        {Object.keys(matchesByDay).map(day => (
  <div key={day} className={styles['day-section']}>
    <h1>{`Day ${day}`}</h1>

    <div className={styles['cards-container']}>
      {matchesByDay[day].filter(match => match.type === numericId).map((match, index) => (
      
              <Card
                key={index}
                email = {userEmail}
                team1={match.team1_name}
                team2={match.team2_name}
                team3={match.team3_name}
                team4={match.team4_name}
                team5={match.team5_name}
                team6={match.team6_name}
                team1_image={match.team1_image}
                team2_image={match.team2_image}
                team3_image={match.team3_image}
                team4_image={match.team4_image}
                team5_image={match.team5_image}
                team6_image={match.team6_image}
                status={match.status}
                time={match.match_time}
                winner={match.winner}
                points={match.points_awarded}
                matchId={match.id} 
                onBet={handleBet}
              />
      ))}
          </div>
       
        </div>
      ))}
    </div>
  );
};

export default Home;
