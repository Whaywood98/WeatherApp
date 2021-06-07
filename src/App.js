import React, { Component } from 'react';
import './App.css';
import WeekContainer from './WeekContainer';
import {FaSearch} from 'react-icons/fa';
import {Capitalize, getWeather} from './Functions';
import { Route, Switch } from 'react-router-dom';
import {Header} from './Header';

class App extends Component {

    
    state = {
        header: <Header/>,
        city: '',
        week: null,
        fullData: [],
        dailyData: []
    }
    

    onSubmit = async () => {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=imperial&APPID=7f4b48ff9ae68e7971f1296d023d0abd`;

        await getWeather(weatherURL)
        .then(res => res.json())
        .then(data => 
             {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00") )
            this.setState({
                fullData: data.list,
                dailyData: dailyData
            }, () => console.log(this.state))
        })

        

        this.setState({
            week: <WeekContainer city={this.state.city} dailyData={this.state.dailyData}/>,
            header: <Header city={Capitalize(this.state.city)}/>
        }) 
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeyPress = (e) => {
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }    

    render() {

        return (
            <div>
            

                {this.state.header} 
            
                <div className="search" onSubmit={this.onSubmit}>
                    <input className="search-box" type="text" placeholder="Search for your city" name="city" onChange={this.onInputChange} onKeyUp={this.handleKeyPress}/>
                    <button type="submit" className="submit" onClick={this.onSubmit.bind(this)}><FaSearch className="submit"/></button>
                </div> 

                <video src="clouds.mp4" muted loop autoPlay></video>

                {this.state.week}
            
            </div>
        );
    }
}

export default App;
