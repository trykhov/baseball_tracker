import React from 'react';

class TeamBuild extends React.Component {

  addPlayer = () => {
    return(
      <div className="ui input focus" data-children-count="1">
        <input type="text" placeholder="Player Name"/>
        <button className="ui icon button">
          <i className="plus square outline icon"></i>
        </button>
      </div>
    )
  }

  render() {
    return(
      <section>
        <div className="ui input focus" data-children-count="1">
          <label>Team Name: </label>
          <input type="text" placeholder="Team Name"/>
        </div>
        <label>Players: </label>
        <div className="ui input focus" data-children-count="1">
          <input type="text" placeholder="Player Name"/>
        </div>

        <button id="done"> Done </button>
      </section>
    );
  }
}

export default TeamBuild;
