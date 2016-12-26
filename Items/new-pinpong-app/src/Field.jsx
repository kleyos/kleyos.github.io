import React from 'react';

import Ball from './Ball.jsx';
import Rocket from './Rocket.jsx';
import Score from './Score.jsx';

function Field(props){
    
    return (
      <div id="field" onMouseMove={props.onMouseMove} onTouch={props.onTouch}>
        <div id="game_over">GAME IS OVER</div>
        <Score style={{top:"20%"}} score={props.player1} />
        <Score style={{bottom:"20%"}} score={props.player2} /> 
        <Ball {...props}/>
        <Rocket movementY={0} {...props} />
        <Rocket movementY={290} {...props}/>
      </div>
    );
  }

export default Field;