import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from './admin.module.css';
import { Link} from 'react-router-dom';

const Admin = ({photoId}) => {
   
  const numericId = parseInt(photoId, 10);
  const [Addbutton, setAddbutton] = useState(true);
  const [matchesByDay, setMatchesByDay] = useState({});
  const [newMatch, setNewMatch] = useState({
    teams: [
      { name: '', image: null },
      { name: '', image: null },
      { name: '', image: null },
      { name: '', image: null },
      { name: '', image: null },
      { name: '', image: null },
    ],
    type: numericId,
    status: 'Future',
    day: '1',
    winner:'0',
    match_time: '00:00 AM',
    points_awarded: 0,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/robowars-bet/matches/');
        const data = await response.json();

        // Group matches by day
        const groupedMatches = {};
        data.forEach((match) => {
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
  }, [photoId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMatch((prevMatch) => ({
      ...prevMatch,
      [name]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const { files } = e.target;
    setNewMatch((prevMatch) => {
      const newTeams = [...prevMatch.teams];
      newTeams[index].image = files[0];
      return { ...prevMatch, teams: newTeams };
    });
  };
  const handleNameChange = (e, index) => {
    const { value } = e.target;
    setNewMatch((prevMatch) => {
        const newTeams = [...prevMatch.teams];
        newTeams[index].name = value;
        return { ...prevMatch, teams: newTeams };
    });
};

const handleAddMatch = async () => {
  setAddbutton(false);
  try {
    const teamPromises = newMatch.teams.map(async (team) => ({
      name: team.name,
      image: team.image ? await convertImageToBase64(team.image) : null,
    }));

    const teams = await Promise.all(teamPromises);

    const matchData = {
      type: numericId,
      status: newMatch.status,
      day: newMatch.day,
      match_time: newMatch.match_time,
      winner: newMatch.winner,
      points_awarded: newMatch.points_awarded,
      teams: teams,
    };

    await axios.post('robowars-bet/add-matches/', matchData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Clear the form
    setNewMatch({
      teams: [
        { name: '', image: null },
        { name: '', image: null },
        { name: '', image: null },
        { name: '', image: null },
        { name: '', image: null },
        { name: '', image: null },
      ],
      type: numericId,
      status: 'Future',
      day: '1',
      winner:'0',
      match_time: '00:00 AM',
      points_awarded: 0,
    });
  } catch (error) {
    console.error('Failed to add match', error);
  }
};
const convertImageToBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(imageFile);
  });
};

const getTypeLabel = () => {
  switch (numericId) {
    case 1:
      return 'Robowars';
    case 2:
      return 'IFT';
    case 3:
      return 'Drone Racing';
    default:
      return 'Unknown Type';
  }
};

    return (
        <div className={styles['grid-container']}>
           <div className={styles.grid}>
                {/* Render sections for each type */}
                <h2 className={styles['match-type']}> Matches</h2>
                {Object.keys(matchesByDay).map(day => (
                    <div key={day} className={styles['day-section']}>
                        <h1>{`Day ${day}`}</h1>
                        <div className={styles['cards-container']}>
                            {matchesByDay[day].filter(match => match.type === numericId).map((match, index) => (
                            <Card key={match.id} match={match} />
                            ))}
                        </div>                      
                    </div>
                ))}
           </div>

            {/* Add new match form */}
            <h3>Add New Match</h3>
            <div className={styles.flask}>
            <div className={styles['add-match-section']}>
                
                <div className={styles['add-match-form']}>
                    {/* Render form inputs */}
                    <div>
                    <h3>Must fill top two teams</h3>
                        {newMatch.teams.map((team, index) => (
                            <div key={index}>
                                <label>Team {index + 1} Name:</label>
                                <input
                                    type="text"
                                    name={`team${index + 1}_name`}
                                    
                                    onChange={(e) => handleNameChange(e, index)}
                                />
                                <label>Team {index + 1} Image:</label>
                                <input
                                    type="file"
                                    name={`team${index + 1}_image`}
                                    onChange={(e) => handleImageChange(e, index)}
                                />
                            </div>
                        ))}
                        
                       
                    </div>
                    <p></p>
                   
                    <label>Type: {getTypeLabel()}</label>
                  
                    <div className={styles['add-match-for']}>
                      
                        <label>Status:</label>
                            <select 
                                type ="text"
                                name ="status"
                                onChange={handleInputChange}
                                value={newMatch.status}
                                >
                             
                                <option value="Finished">Finished</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Betting-On">Betting-on</option>
                                <option value="Future">Future</option>
                            </select>
                        <label>Day:</label>
                        <select 
                            type ="text"
                            name ="day"
                            onChange={handleInputChange}
                            value={newMatch.day}
                            >                         
                            <option value="1">Day 1</option>
                            <option value="2">Day 2</option>
                            <option value="3">Day 3</option>
                        </select>
                        <label>Match Time:</label>
                        <input
                            type="text"
                            name="match_time"
                            value={newMatch.match_time}
                            onChange={handleInputChange}
                        />
                        <label>Points Awarded:</label>
                        <input
                        type="number"
                        name="points_awarded"
                        value={newMatch.points_awarded}
                        onChange={handleInputChange}
                        />
                    </div>
                    {Addbutton && (<button onClick={handleAddMatch}>Add Match</button>)}
                    {!Addbutton && (<h1>Refresh to Add other</h1>)}
                </div>
            </div>
            <div className={styles['export-csv-button-container']}>
              {/* <button className={styles['export-csv-button']} onClick={handleCSV}>Export CSV</button> */}
              <Link to={`https://techfest.org/robowars-bet/export-csv/${numericId}/`}>Export CSV</Link>
            </div>
            </div>
        </div>
    );
};
export default Admin;
