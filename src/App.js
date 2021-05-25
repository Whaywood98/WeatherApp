import React, { Component } from 'react';
import './App.css';
import {FaSearch} from 'react-icons/fa';
import WeekContainer from './WeekContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            week: null
        }
    }

    onSubmit = () => {
        this.setState({
            week: <WeekContainer city={this.state.city}/> 
        })   
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
            <header class="header-content">
                <h1>Weather Finder</h1>
                <h3>Find the weather in your city!</h3> 
                <form class="search" onSubmit={this.onSubmit}>
                    <input class="search-box" type="text" placeholder="Search for your city" name="city" onChange={this.onInputChange}></input>
                    <button class="submit" onClick={this.onSubmit}><FaSearch class="submit"/></button> 
                </form>
            </header>
                <video src="clouds.mp4" muted loop autoPlay></video>
            
            <div className="App">
            {this.state.week}
            </div> 
            </>
        );
    }
}

export default App;
