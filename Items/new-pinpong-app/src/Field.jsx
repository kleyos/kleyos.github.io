import React from 'react';

import Ball from './Ball.jsx';
import Rocket from './Rocket.jsx';
import Score from './Score.jsx';

function Field(props){
    
    return (
      <div id="field" onMouseMove={props.onMouseMove}>
        <div id="game_over">GAME IS OVER</div>
        <Score id="player1" style={{top:"20%"}}score={props.player1} />
        <Score id="player2" style={{bottom:"20%"}}score={props.player2} /> 
        <Ball ball={props.ball}/>
        <Rocket movementY={0} rocket={props.rocket}/>
        <Rocket id="rocket" movementY={290} rocket={props.rocket}/>
      </div>
    );
  }

export default Field;