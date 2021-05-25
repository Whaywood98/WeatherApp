import React from 'react';
import apiConfig from './apiKeys';
import DayCard from './DayCard';
import { Card } from 'reactstrap';



class WeekContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullData: [],
            dailyData: []
        }
    } 

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=imperial&APPID=bdd1f5a813422b8b276c265d71b903fa`;
        
        fetch(weatherURL)
            .then(res => {
                if(res.ok) {
                    return res;
                } else {
                    var err = new Error('Error ' + res.status + ': ' + res.statusText);
                    err.response = res;
                    throw err;
                }
            },
                err => {
                    var errmess = new Error(err.message);
                    throw errmess;
                })
            .then(res => res.json())
            .then(data => 
                 {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00") )
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            }
            ).catch(err => alert(err.message))
    }

    componentDidUpdate = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=imperial&APPID=7f4b48ff9ae68e7971f1296d023d0abd`;
        
        fetch(weatherURL)
            .then(res => {
                if(res.ok) {
                    return res;
                } else {
                    var err = new Error('Error ' + res.status + ': ' + res.statusText);
                    err.response = res;
                    throw err;
                }
            })
            .then(res => res.json())
            .then(data => 
                 {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00") )
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            }
            ).catch(err => alert(err.message))
    }

    renderDayCard = () => {
        return this.state.dailyData.map((day) =>
                <DayCard day={day} />
        );
            
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <h4 className="display-4 text-muted">{this.props.city}, US</h4>
                <div className="row justify-content-center">
                    {this.renderDayCard()}
                </div>
            </div>
        )
    }
}

export default WeekContainer;