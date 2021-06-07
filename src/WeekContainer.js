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

    

    renderDayCard = () => {
        return this.props.dailyData.map((day) =>
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