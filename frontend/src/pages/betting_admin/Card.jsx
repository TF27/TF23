// src/components/MatchCard.js
import React, { useState } from 'react';
import styles from './card.module.css';

const MatchCard = ({ match }) => {
    const [updatedWinner, setUpdatedWinner] = useState(match.winner);
    const [updatedStatus, setUpdatedStatus] = useState(match.status);

    const handleWinnerChange = (e) => {
        setUpdatedWinner(e.target.value);
    };

    const handleStatusChange = (e) => {
        setUpdatedStatus(e.target.value);
    };

    const handleUpdateMatch = async () => {
        try {
            const response = await fetch(`/robowars-bet/update-matches/${match.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ winner: updatedWinner, status: updatedStatus }),
            });

            if (response.ok) {
                // Handle successful update (e.g., update local state or fetch updated data)
                console.log('Match updated successfully');
            } else {
                // Handle update failure
                console.error('Failed to update match:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating match:', error);
        }
    };

    const handleDeleteMatch = async () => {
        try {
            const response = await fetch(`/robowars-bet/delete-matches/${match.id}/`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Handle successful deletion (e.g., update local state or fetch updated data)
                console.log('Match deleted successfully');
            } else {
                // Handle deletion failure
                console.error('Failed to delete match:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting match:', error);
        }
    };

    return (
        <div className={styles['match-card-container']}>
            <div className={styles.bettingcard3}>
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
            {match.team3_name && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team3_image} alt="Team 3" className={styles['match-card-team-image']} />
                    <p className={styles['match-card-team-name']}>{match.team3_name}</p>
                </div>
            )}

            {/* Team 4 */}
            {match.team4_name && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team4_image} alt="Team 4" className={styles['match-card-team-image']}/>
                    <p className={styles['match-card-team-name']}>{match.team4_name}</p>
                </div>
            )}

            {/* Team 5 */}
            {match.team5_name && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team5_image} alt="Team 5" className={styles['match-card-team-image']}/>
                    <p className={styles['match-card-team-name']}>{match.team5_name}</p>
                </div>
            )}

            {/* Team 6 */}
            {match.team6_name && (
                <div className={styles['match-card-team-container']}>
                    <img src={match.team6_image} alt="Team 6" className={styles['match-card-team-image']} />
                    <p className={styles['match-card-team-name']}>{match.team6_name}</p>
                </div>
            )}

            </div>
            <p className={styles['match-card-info']}>Day: {match.day}</p>
            <p className={styles['match-card-info']}>Time: {match.match_time}</p>
            <p className={styles['match-card-info']}>Points Awarded: {match.points_awarded}</p>

            {/* Update Section */}
            <div className={styles['match-card-update-section']}>
  <div className={styles['update-section-item']}>
    <label>Update Status: {match.status}</label>
    <select
      className={styles['match-card-update-input']}
      value={updatedStatus}
      onChange={handleStatusChange}
    >
      <option value="Finished">Finished</option>
      <option value="Ongoing">Ongoing</option>
      <option value="Betting-On">Betting-on</option>
      <option value="Future">Future</option>
    </select>
  </div>

  <div className={styles['update-section-item']}>
    <label>Update Winner: {match.winner}</label>
    <select
      className={styles['match-card-update-input']}
      value={updatedWinner}
      onChange={handleWinnerChange}
    >
        <option value="1">{match.team1_name}</option>
        <option value="2">{match.team2_name}</option>
        {match.team3_name && <option value="3">{match.team3_name}</option>}
        {match.team4_name && <option value="4">{match.team4_name}</option>}
        {match.team5_name && <option value="5">{match.team5_name}</option>}
        {match.team6_name && <option value="6">{match.team6_name}</option>}
    </select>
  </div>

  <div className={styles['button-container']}>
    <button onClick={handleUpdateMatch} className={styles['update-button']}>
      Update
    </button>
    <button onClick={handleDeleteMatch} className={styles['delete-button']}>
      Delete
    </button>
    
  </div>
  <p>Don't delete if someone has made bet on the Match</p>
</div>
        </div>
    );
};

export default MatchCard;
