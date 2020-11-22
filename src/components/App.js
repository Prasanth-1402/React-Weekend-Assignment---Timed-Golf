import React, { Component, useState, Fragment } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started : false };
    this.timerInterval = null;
    this.startGame = () => {
      this.setState ({
          started: true,
      });
      this.timerInterval = setInterval(
        () =>  this.setState({time : this.state.time + 1}), 1 * 1000);

      document.addEventListener("keydown", this.keyListener);
    }

    this.keyListener = (event) => {
      if(this.state.started){
        if(event.keyCode === 37){
          this.setState({x: this.state.x - 5})
        }else if(event.keyCode === 38){
          this.setState({y: this.state.y - 5})
        }else if(event.keyCode === 39){
          this.setState({x: this.state.x + 5})
        }else if(event.keyCode === 40){
          this.setState({y: this.state.y + 5})
        } 
      }
    }
  }

  


  componentDidMount() {}

  componentDidUpdate(){  
    if(this.state.x === 250 && this.state.y === 250){
      clearInterval(this.timerInterval);
      document.removeEventListener('keydown', this.keyListener);
    }
  }

  componentWillUnmount() {  }



  render() {
    return (
            <>
              {this.state.started ? 
                  ( <>
                      <div className="ball" style = {{ left: this.state.x+"px" , top: this.state.y+"px"}}></div>
                      <div className="hole"></div>
                      <div className="heading-timer">{this.state.time}</div>
                    </>
                  ) : (
                    <button calssName="start" onClick={this.startGame}> Start Timer </button>
                  )
             }
            </>
    );
  }
}

export default Timer;
