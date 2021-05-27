
import React from 'react';
var moment = require('moment');

const DayCard = (props) => {
    let newDate = new Date();
    const weekday = props.day.dt * 1000
    newDate.setTime(weekday)


    return (
        
        <div className="col-sm-2">
            <div className="card">
                <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
                <p>{moment(newDate).format('MMMM Do, h:mm a')}</p>
                <h2>{Math.round(props.day.main.temp)} °F</h2>
                <div className="card-body">
                    <p className="card-text">{props.day.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default DayCard;