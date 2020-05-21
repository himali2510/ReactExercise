import React from 'react';
import ReactDOM from 'react-dom';
import GetWeatherData from './API/GetWeatherData';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <GetWeatherData />,
  document.getElementById('root')
);
