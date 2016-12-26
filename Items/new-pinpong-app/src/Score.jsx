import React from 'react';

function Score(props){ 
 
 return (
      <div className="player" style={props.style}> <span>{props.score}</span> </div>
    );
} 

export default Score;