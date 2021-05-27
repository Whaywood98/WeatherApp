export const Header = (props) => {
    if(props.city){
        return(
            <header className="header-content">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <h4 className="display-4 city">{props.city}, US</h4> 
            </header>
        );
    }
    return(
        <header className="header-content">
            <h1>Weather Finder</h1>
            <h3>Find the weather in your city!</h3>  
        </header>
    );
}