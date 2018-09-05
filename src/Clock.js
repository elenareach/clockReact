import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display'


class Clock extends Component {
    constructor(){
        super();
        this.state = {
            date : new Date()
        }
        
    }
    
   startTime(){
        this.timer = setInterval(() => {
          this.setState(() => ({ date: new Date()}));
      }, 1000);
   } 
componentDidMount(){
  this.startTime();
}
    render() {
      return (
        <div className="App">
          <Display date = {this.state.date}/>
          
        </div>
      );
    }
  }

export default Clock;