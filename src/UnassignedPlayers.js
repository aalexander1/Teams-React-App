import React from 'react';

// functional React Component
function UnassignedPlayers(props) {
  const unassignedPlayers = props.list.map(function (player, index) {
    if (player.team === null) {
      return (
        <li key={index}>
          <button
            className="assignTeam team1-btn"
            onClick={function() {props.addTeam(player, 1)}}
          >
            Team 1
          </button>
        <button
          className="assignTeam team2-btn"
          onClick={function() {props.addTeam(player, 2)}}
        >
          Team 2
        </button>{player.name}
      </li>
      );
    }
    return undefined; 
  })
    return (
      <div className="List">
        <h2>List of Unassigned Players</h2>
        <ul> 
            {unassignedPlayers}
        </ul>
      </div>
    );
}

export default UnassignedPlayers;