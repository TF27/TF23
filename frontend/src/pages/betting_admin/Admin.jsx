import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from './admin.module.css';

const Admin = ({photoId}) => {
   
//     const numericId = parseInt(photoId, 10);
//     const [matchesByDay, setMatchesByDay] = useState({});
//     const [matches, setMatches] = useState({});
//     const [newMatch, setNewMatch] = useState({
//         teams: [
//             { name: '', image: null },
//             { name: '', image: null },
//             { name: '', image: null },
//             { name: '', image: null },
//             { name: '', image: null },
//             { name: '', image: null },
//         ],
//         type: {numericId},
//         day: '',
//         status:'',
//         match_time: '',
//         points_awarded: '',
//         winner: '',
//     });

    
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/robowars-bet/matches/'); 
//         const data = await response.json();

//         // Group matches by day
//         const groupedMatches = {};
//         data.forEach(match => {
//           const day = match.day;
//           if (!groupedMatches[day]) {
//             groupedMatches[day] = [];
//           }
//           groupedMatches[day].push(match);
//         });

//         setMatchesByDay(groupedMatches);
        
//       } catch (error) {
//         console.error('Error fetching data from the backend:', error);
//       }
//     };  
//     fetchData();
//   }, [photoId]);

   

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewMatch((prevMatch) => ({
//             ...prevMatch,
//             [name]: value,
//         }));
//     };

//     const handleImageChange = (e, index) => {
//         const { files } = e.target;
//         setNewMatch((prevMatch) => {
//             const newTeams = [...prevMatch.teams];
//             newTeams[index].image = files[0];
//             return { ...prevMatch, teams: newTeams };
//         });
//     };
//     const handleTimeChange = (time) => {
//         setNewMatch({ ...newMatch, match_time: time });
//       };

//     const handleAddMatch = async () => {
//         try {
//             const formData = new FormData();
//             formData.append('type', newMatch.type);
//             formData.append('day', newMatch.day);
//             formData.append('match_time', newMatch.match_time);
//             formData.append('points_awarded', newMatch.points_awarded);
//             formData.append('winner', newMatch.winner);

//             newMatch.teams.forEach((team, index) => {
//                 formData.append(`team${index + 1}_name`, team.name);
//                 formData.append(`team${index + 1}_image`, team.image);
//             });

//             await axios.post('http://your-api-url/matches/', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             // Fetch updated matches after adding a new match
//             const response = await axios.get('http://your-api-url/matches/');
//             setMatches(response.data);

//             // Clear the form
//             setNewMatch({
//                 teams: [
//                     { name: '', image: null },
//                     { name: '', image: null },
//                 ],
//                 type: 1,
//                 day: 1,
//                 match_time: '12:00',
//                 points_awarded: 0,
//                 winner: '',
//             });
//         } catch (error) {
//             console.error('Failed to add match', error);
//         }
//     };
const numericId = parseInt(photoId, 10);
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
    type: '',
    day: '',
    match_time: '',
    points_awarded: '',
    winner: '',
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

  const handleTimeChange = (time) => {
    setNewMatch({ ...newMatch, match_time: time });
  };

  const handleAddMatch = async () => {
    try {
      const formData = new FormData();
      formData.append('type', newMatch.type);
      formData.append('status', newMatch.status);
      formData.append('day', newMatch.day);
      formData.append('match_time', newMatch.match_time);
      formData.append('points_awarded', newMatch.points_awarded);

      newMatch.teams.forEach((team, index) => {
        formData.append(`teams[${index}][name]`, team.name);
        formData.append(`teams[${index}][image]`, team.image);
      });

      await axios.post('/robowars-bet/add-match/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Fetch updated matches after adding a new match
      const response = await axios.get('/robowars-bet/add-matches/');
      setMatchesByDay(response.data);

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
        type: '',
        day: '',
        match_time: '12:00',
        points_awarded: 0,
        winner: '',
      });
    } catch (error) {
      console.error('Failed to add match', error);
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
            <div className={styles['add-match-section']}>
                
                <div className={styles['add-match-form']}>
                    {/* Render form inputs */}
                    <div>
                        {newMatch.teams.map((team, index) => (
                            <div key={index}>
                                <label>Team {index + 1} Name:</label>
                                <input
                                    type="text"
                                    name={`team${index + 1}_name`}
                                    
                                    onChange={(e) => handleInputChange(e, index)}
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
                    <div className={styles['add-match-for']}>
                        <label>Status:</label>
                            <select 
                                type ="text"
                                name ="type"
                                onChange={handleInputChange}
                                value={newMatch.type}
                                >
                                <option value="">-----</option>
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
                            <option value="">-----</option>
                            <option value="1">Day 1</option>
                            <option value="2">Day 2</option>
                            <option value="3">Day 3</option>
                        </select>
                        <label>Match Time:</label>
                        <input
                            type="time"
                            name="match_time"
                            value={newMatch.match_time}
                            onChange={handleTimeChange}
                        />
                        <label>Points Awarded:</label>
                        <input
                        type="number"
                        name="points_awarded"
                        value={newMatch.points_awarded}
                        onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleAddMatch}>Add Match</button>
                </div>
            </div>
        </div>
    );
};
export default Admin;
