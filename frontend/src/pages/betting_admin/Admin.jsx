import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styles from './admin.module.css';

const Admin = () => {
    const [matches, setMatches] = useState([]);
    const [newMatch, setNewMatch] = useState({
        teams: [
            { name: '', image: null },
            { name: '', image: null },
        ],
        type: 1,
        day: 1,
        match_time: '12:00',
        points_awarded: 0,
        winner: '',
    });

    
    useEffect(() => {
        // Fetch matches from the API
        const fetchData = async () => {
            try {
                const response = await fetch('/robowars-bet/matches');
                const data = await response.json();
                setMatches(data);
            } catch (error) {
                console.error('Failed to fetch matches', error);
            }
        };

        fetchData();
    }, []);

    // Organize matches by type and day
    const organizedMatches = matches.reduce((acc, match) => {
        const type = match.type;
        const day = match.day;

        if (!acc[type]) {
            acc[type] = {};
        }

        if (!acc[type][day]) {
            acc[type][day] = [];
        }

        acc[type][day].push(match);

        return acc;
    }, {});

    const updateMatch = async (matchId, updatedDetails) => {
        try {
            // Make an API call to update the match details
            const response = await axios.put(`http://your-api-url/matches/${matchId}/`, updatedDetails);

            // Update the state with the updated match
            setMatches((prevMatches) => {
                return prevMatches.map((match) => (match.id === matchId ? { ...match, ...updatedDetails } : match));
            });

            // Handle the response as needed
            console.log('Match details updated successfully', response.data);
        } catch (error) {
            console.error('Failed to update match details', error);
        }
    };

   






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

    const handleAddTeam = () => {
        setNewMatch((prevMatch) => ({
            ...prevMatch,
            teams: [...prevMatch.teams, { name: '', image: null }],
        }));
    };

    const handleAddMatch = async () => {
        try {
            const formData = new FormData();
            formData.append('type', newMatch.type);
            formData.append('day', newMatch.day);
            formData.append('match_time', newMatch.match_time);
            formData.append('points_awarded', newMatch.points_awarded);
            formData.append('winner', newMatch.winner);

            newMatch.teams.forEach((team, index) => {
                formData.append(`team${index + 1}_name`, team.name);
                formData.append(`team${index + 1}_image`, team.image);
            });

            await axios.post('http://your-api-url/matches/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Fetch updated matches after adding a new match
            const response = await axios.get('http://your-api-url/matches/');
            setMatches(response.data);

            // Clear the form
            setNewMatch({
                teams: [
                    { name: '', image: null },
                    { name: '', image: null },
                ],
                type: 1,
                day: 1,
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
            {/* Render sections for each type */}
            {Object.entries(organizedMatches).map(([type, typeMatches]) => (
                <div key={type} className={styles['match-section']}>
                    <h2 className={styles['match-type']}>{type} Matches</h2>
                    {/* Render matches within each type and day */}
                    {Object.entries(typeMatches).map(([day, dayMatches]) => (
                        <div key={day}>
                            <h3 className={styles['match-day']}>Day {day}</h3>
                            {dayMatches.map((match) => (
                                <Card key={match.id} match={match} onUpdateMatch={updateMatch} />
                            ))}
                        </div>
                    ))}
                </div>
            ))}

            {/* Add new match form */}
            <div className={styles['add-match-section']}>
                <h3>Add New Match</h3>
                <div className={styles['add-match-form']}>
                    {/* Render form inputs */}
                    <div>
                        {newMatch.teams.map((team, index) => (
                            <div key={index}>
                                <label>Team {index + 1} Name:</label>
                                <input
                                    type="text"
                                    name={`team${index + 1}_name`}
                                    value={team.name}
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
                        <button onClick={handleAddTeam}>Add Team</button>
                    </div>
                    <label>Type:</label>
                <input
                    type="text"
                    name="type"
                    value={newMatch.type}
                    onChange={handleInputChange}
                />
                <label>Day:</label>
                <input
                    type="text"
                    name="day"
                    value={newMatch.day}
                    onChange={handleInputChange}
                />
                <label>Match Time:</label>
                <input
                    type="text"
                    name="match_time"
                    value={newMatch.match_time}
                    onChange={handleInputChange}
                />
                <label>Points Awarded:</label>
                <input
                    type="text"
                    name="points_awarded"
                    value={newMatch.points_awarded}
                    onChange={handleInputChange}
                />
                <label>Winner:</label>
                <input
                    type="text"
                    name="winner"
                    value={newMatch.winner}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddMatch}>Add Match</button>
                </div>
            </div>
        </div>
    );
};
export default Admin;
