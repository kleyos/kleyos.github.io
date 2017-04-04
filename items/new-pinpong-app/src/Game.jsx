import React from 'react';

import Field from './Field.jsx';

class Game extends React.Component {
    constructor() {
    
    	super();
    
    	this.state={
	    	field: {left: null},
	    	
	    	ball: {	left:50, top:0 },

	    	rocket:{r:0},

	    	player1:0, 

        player2:0 
    	}
    	
      this.handleMove = this.handleMove.bind(this);
    	this.startMovementBall = this.startMovementBall.bind(this);
   }
   
   getPosition(targetObj, referenceObj){
        
        if(targetObj === null || targetObj === undefined || referenceObj === null || referenceObj === undefined){
          return;
        }
      
        const bodyRect = referenceObj.getBoundingClientRect(),
              elemRect = targetObj.getBoundingClientRect(),
              offsetY   = elemRect.top - bodyRect.top,
              offsetX   = elemRect.left - bodyRect.left;        
        
        return ({
          
          offsetX : offsetX,
          offsetY : offsetY,
          windowX : bodyRect.width,
          windowY : bodyRect.height,
        
        });      
	}

   startMovementBall() {
    const diameter = 20,
          rocketW = 60,
          rocketH = 10;
    
    let   stop = false,
          stepX = 5,
          stepY = 5;

	  const timerId = setInterval(moveIt.bind(this), 50);  
    
    function touchBottom(ballY, w, rate){
      if (ballY > w) {
        rate = incRate(rate);
        this.setState({player2:rate});
        
        return true;
      }
      else {return false}
    }
    
    function touchTop(ballY, rate){
        if (ballY < diameter) {
            rate = incRate(rate);
            this.setState({player1:rate});          
           
           return true;
        }
        else {return false}
      }
    
    function touchLeft(ballX){
        if (ballX < diameter) {return true;}
        else {return false}
      }
    
    function touchRight(ballX, h){
        if (ballX > h) {return true;}
        else {return false}
      }
    
    function touchRocket(ballY, ballX, rocketX, w ){
      if (((ballX > rocketX && ballX < rocketX+rocketW) && ballY > w - rocketH) || 
         ((ballX > rocketX && ballX < rocketX+rocketW) && ballY < diameter + rocketH)) 
         {return true;}
      
      else {return false}
    }
    
    function incRate(rate){ 
     rate = ++rate;
     if  (rate >= 10) {
        stop = true;
        return false;
      }
      else{return rate;}
    }

    function moveIt() {    
	
   	const positionBall = this.getPosition(document.getElementById("ball"), document.getElementById("field"));
   
  	const positionRocket = this.getPosition(document.querySelector(".rocket"), document.getElementById("field"));

	  const ballX = positionBall.offsetX+diameter + stepX, 
		      ballY = parseInt(positionBall.offsetY, 10)+diameter + stepY, 
          windowX = positionBall.windowX, 
          windowY = positionBall.windowY, 
		      
          rocketX = positionRocket.offsetX;
  

    if(touchBottom.call(this, ballY, windowY, this.state.player2) || touchTop.call(this,ballY, this.state.player1) ) {  
          stepY *= -1;   
      } 
    else if (touchRight(ballX, windowX) || touchLeft(ballX)) {  
          stepX *= -1;   
      }
    else if (touchRocket(ballY, ballX, rocketX, windowY)) {
      stepY *= -1;
    }
  
		  const xUpdate = this.state.ball.left + stepX,
	      	  yUpdate = this.state.ball.top + stepY;
	 		 
		if (!stop) {
			this.setState({  ball: {left:xUpdate,top:yUpdate } }); 
		}
    else {
      const gameOver = document.getElementById('game_over');
      
      gameOver.style.display="block";
      clearInterval(timerId);
    }

	}
} 

  handleMove(e) {
    const rocketW = 60,
          left = this.state.field.left;
    
    let   x = e.clientX-rocketW -left; 
    
    if (x< 0) {x = 0}
    
    this.setState({rocket: {r:x} });      
  }

   
  componentDidMount() {
    const posField = document.getElementById("field").getBoundingClientRect();
    
    this.setState({field: { left: posField.left } });
    this.startMovementBall(); 
  }
  
  render() {
      return (
          <Field field={this.state.field} 
                 ball={this.state.ball} 
                 rocket={this.state.rocket.r} 
                 onMouseMove={this.handleMove}
                 onTouch={this.handleMove} 
                 player1={this.state.player1}
                 player2={this.state.player2} />
      );
  }
}

export default Game;