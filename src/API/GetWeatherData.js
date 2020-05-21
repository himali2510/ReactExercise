import React from 'react'
import FormComponent from '../Formcomponent'
import Weather from '../Weather'
import 'bootstrap/dist/css/bootstrap.min.css';
//download weatherIcons :npm i https://github.com/erikflowers/weather-icons.git

const Apikey = "479ca2af198ecc8d18af0b2fd8acf5ca";
class GetWeatherData extends React.Component {
    constructor() {
        super();
        //set default value in state
        this.state =
        {
            city: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false

        };
        //weaather Icon
        this.WeatherIcon = {
            Thunderstorm: "wi-thunerstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-strorm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        }
    }

    //convert weather temperature in celsius
    calCelsius(temperature) {
        let celsius = Math.floor(temperature - 273.15)
        return celsius;
    }

    //Get weather Icon According to weather Rangeid 
    getWeatherIcon(icons, rangeid) {
        switch (true) {
            case rangeid >= 200 && rangeid <= 232:
                this.setState({ icon: this.WeatherIcon.Thunderstorm });
                break;
            case rangeid >= 300 && rangeid <= 321:
                this.setState({ icon: this.WeatherIcon.Drizzle });
                break;
            case rangeid >= 500 && rangeid <= 531:
                this.setState({ icon: this.WeatherIcon.Rain });
                break;
            case rangeid >= 600 && rangeid <= 622:
                this.setState({ icon: this.WeatherIcon.Snow });
                break;
            case rangeid >= 701 && rangeid <= 781:
                this.setState({ icon: this.WeatherIcon.Atmosphere });
                break;
            case rangeid === 800:
                this.setState({ icon: this.WeatherIcon.Clear });
                break;
            case rangeid >= 801 && rangeid <= 804:
                this.setState({ icon: this.WeatherIcon.Clouds });
                break;
            default:
                this.setState({ icon: this.WeatherIcon.Clouds });
        }
    }
    //Fetch Weather data from openweathermap api and set result values in state
    FetchWeatherdata = async event => {
        event.preventDefault();
        const city = event.target.City.value;
        const country = event.target.Country.value;
        if (city && country) {
            const api = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Apikey} `
            );
            const response = await api.json();
            this.setState({
                city: `${response.name},${response.sys.country}`,
                celsius: this.calCelsius(response.main.temp),
                temp_min: this.calCelsius(response.main.temp_min),
                temp_max: this.calCelsius(response.main.temp_max),
                description: response.weather[0].description
            });
                this.getWeatherIcon(this.WeatherIcon,response.weather[0].id);
        } else {
            this.setState({ error: true });
        }
    }

    render() {
        return (
            <div className="Container" >
                <div className="cards" >
                    <FormComponent LoadWeather={this.FetchWeatherdata} error={this.state.error}/>
                    <Weather
                        city={this.state.city}
                        temp_celsius={this.state.celsius}
                        temp_min={this.state.temp_min}
                        temp_max={this.state.temp_max}
                        description={this.state.description}
                        WeatherIcon={this.state.icon}
                    />
                </div>
            </div>
        );
    }
}
export default GetWeatherData;