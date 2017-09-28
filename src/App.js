import React, { Component } from 'react';
import Teams from './Teams.js';
import UnassignedPlayers from './UnassignedPlayers';
import data from './data.js';

class App extends Component {
  constructor() {
    super ();
    this.state = data;
    this.assignTeam = this.assignTeam.bind(this);
  }

  assignTeam = (player, teamNum) => {
    let team = Object.assign({}, this.state.players);
    player.team = teamNum;
    this.setState({
      team: team,
    });
  }

  changeTeams = (player) => {
    let newTeam;
    let team = Object.assign({}, this.state.players);
    if (player.team === 1) {
      newTeam = 2;
    } else {
      newTeam = 1;
    }
    player.team = newTeam;
    this.setState({
      team: team,
    });
  }


  render() {
    // console.log (this.state.text);
    return (
      <div className="app">
        
        <Teams 
          list={this.state.players}
          changeTeam={this.changeTeams}/>
        <UnassignedPlayers 
          list={this.state.players}
          addTeam={this.assignTeam}/>
      </div>
    );
  }
}

export default App;
