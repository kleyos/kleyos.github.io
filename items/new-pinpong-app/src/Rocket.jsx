import React from 'react';

function Rocket (props){
    
    return (
      <div className="rocket"  style={{left:props.rocket, top:props.movementY}}></div>
    );
}  

export default Rocket;