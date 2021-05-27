import React, { Component } from 'react';
import './App.css';
import WeekContainer from './WeekContainer';
import {FaSearch} from 'react-icons/fa';
import {Capitalize} from './Functions';
import { Route, Switch } from 'react-router-dom';
import {Header} from './Header';

class App extends Component {

    
    state = {
        header: <Header/>,
        city: '',
        week: null
    }
    

    onSubmit = () => {
        this.setState({
            week: <WeekContainer city={this.state.city}/>,
            header: <Header city={Capitalize(this.state.city)}/>
        }) 
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div>
            

                {this.state.header} 
            
                <div className="search" onSubmit={this.onSubmit}>
                    <input className="search-box" type="text" placeholder="Search for your city" name="city" onChange={this.onInputChange}/>
                    <button className="submit" onClick={this.onSubmit.bind(this)}><FaSearch className="submit"/></button>
                </div> 

                <video src="clouds.mp4" muted loop autoPlay></video>

                {this.state.week}
            
            </div>
        );
    }
}

export default App;
