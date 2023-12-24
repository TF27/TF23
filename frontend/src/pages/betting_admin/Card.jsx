// src/components/MatchCard.js
import React, { useState } from 'react';
import styles from './card.module.css';

const MatchCard = ({ match, onUpdateMatch }) => {
    
    const [updatedWinner, setUpdatedWinner] = useState(match.winner);
    const [updatedStatus, setUpdatedStatus] = useState(match.status);

    const handleWinnerChange = (e) => {
        setUpdatedWinner(e.target.value);
    };

    const handleStatusChange = (e) => {
        setUpdatedStatus(e.target.value);
    };

    const handleUpdateMatch = () => {
        onUpdateMatch(match.id, { winner: updatedWinner, status: updatedStatus });
    };


    return (
        <div className={styles['match-card-container']}>
            

            {/* Team 1 */}
            <div className={styles['match-card-team-container']}>
                <img src={match.team1_image} alt="Team 1" className={styles['match-card-team-image']} />
                <p className={styles['match-card-team-name']}>{match.team1_name}</p>
            </div>

            {/* Team 2 */}
            <div className={styles['match-card-team-container']}>
                <img src={match.team2_image} alt="Team 2" className={styles['match-card-team-image']} />
                <p className={styles['match-card-team-name']}>{match.team2_name}</p>
            </div>

            {/* Team 3 */}
            {match.team3 && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team3_image} alt="Team 3" className={styles['match-card-team-image']} />
                    <p className={styles['match-card-team-name']}>{match.team3_name}</p>
                </div>
            )}

            {/* Team 4 */}
            {match.team4 && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team4_image} alt="Team 4" className={styles['match-card-team-image']}/>
                    <p className={styles['match-card-team-name']}>{match.team4_name}</p>
                </div>
            )}

            {/* Team 5 */}
            {match.team5 && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team5_image} alt="Team 5" className={styles['match-card-team-image']}/>
                    <p className={styles['match-card-team-name']}>{match.team5_name}</p>
                </div>
            )}

            {/* Team 6 */}
            {match.team6 && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team6_image} alt="Team 6" className={styles['match-card-team-image']} />
                    <p className={styles['match-card-team-name']}>{match.team6_name}</p>
                </div>
            )}

            <p className={styles['match-card-info']}>Time: {match.match_time}</p>
            <p className={styles['match-card-info']}>Points Awarded: {match.points_awarded}</p>

            {/* Update Section */}
            <div className={styles['match-card-update-section']}>
                <label>Update Status: {match.status}</label>
                <select className={styles['match-card-update-input']} value={updatedStatus} onChange={handleStatusChange}>
                    <option value="1">Finished</option>
                    <option value="2">Ongoing</option>
                    <option value="3">Betting-on</option>
                    <option value="4">Future</option>
                </select>

                <label>Update Winner: </label>
                <input
                    type="text"
                    value={updatedWinner}
                    onChange={handleWinnerChange}
                    className={styles['match-card-update-input']}
                />

                <button onClick={handleUpdateMatch} className={styles['match-card-update-button']}>Update</button>
            </div>
        </div>
    );
};

export default MatchCard;
