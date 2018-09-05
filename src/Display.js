import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import DateTime from './DateTime';
import './App.css';

const Display = (props) => (
    <div className="container-fluid">
        <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className="display">
                   <div className="display-time">{DateTime.toTimeString(props.date)}</div>
                   <div className="display-date">{DateTime.toDateString(props.date)}</div>  
                </div> 
            </div>
        </div>
    </div>
);
Display.propTypes = {date: PropTypes.object}


export default Display;