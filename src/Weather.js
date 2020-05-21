import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

//Display weather data 
const Weather = props => {
    return (

        <div className="container text-ligth">
            <div className="cards pt-4">
                <h1>
                    {props.city}
                </h1>
                <h5 className="py-4">
                    <i className={`wi ${props.WeatherIcon} display-1`} />
                </h5>
                <div className="py-2">
                    {props.temp_celsius
                        ? (<h1 >{props.temp_celsius}&deg;</h1>)
                        : null}
                </div>
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3" >
                    {props.description}
                </h4>

            </div>
        </div>
    );
}
//Show min and max temp only when both values are available
function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        );
    }

}
export default Weather;