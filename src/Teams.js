import React from 'react';

// Functional Ract component
function Teams(props) {
  function renderTeam(teamID) {
    const teamPlayers = props.list.map(function (player, index) {
      if (player.team === teamID) {
        return (
          <li key={index}>
            <button className="move-btn" onClick={function() {props.changeTeam(player)}}>
              Change Team
            </button>
            {player.name}
          </li>
        );
      }
      return undefined;
    });
    return teamPlayers;
  }

  return (
      <div className="teams">
        <div className="team-col">
          <h2>Team 1</h2>
          <ul className="team-list">
              {renderTeam(1)}
          </ul>
        </div>
        <div className="team-col">
          <h2>Team 2</h2>
          <ul className="team-list">
              {renderTeam(2)} 
          </ul>
        </div>
      </div>
    );
} 

export default Teams;