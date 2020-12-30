import React, { Component } from 'react';


import countdown from '../components/Countdown';
import Ticker from '../components/Ticker';
import '../styles/yaa.css';



class Yaa extends Component {
  state = {timeRemaining: countdown(1609614000),
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        timeRemaining: countdown(1609614000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // const days = digitCheck(this.state.timeRemaining.days);
    // const hours = digitCheck(this.state.timeRemaining.hours);
    // const minutes = digitCheck(this.state.timeRemaining.minutes);
    // const seconds = digitCheck(this.state.timeRemaining.seconds);
    return (
      <div>
        <h1>Time left to next YAA crew meetup.</h1>
        <div className='time-line'>
            {Ticker(this.state.timeRemaining.days, 'Days')}
            {Ticker(this.state.timeRemaining.hours, 'Hours')}
            {Ticker(this.state.timeRemaining.minutes, 'Minutes')}
            {Ticker(this.state.timeRemaining.seconds, 'Seconds')}
        </div>
      </div>
    );
  }
};

export default Yaa;
