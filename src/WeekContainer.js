import React from 'react';
import DayCard from './DayCard';



class WeekContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullData: [],
            dailyData: []
        }
    } 

    componentDidMount = () => {
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

    renderDayCard = () => {
        return this.state.dailyData.map((day) =>
                <DayCard day={day} />
        );
            
    }

    render() {
        return (
            <div className="container">
                <div className="week">
                    <div className="row justify-content-center">
                        {this.renderDayCard()}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeekContainer;