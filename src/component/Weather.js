import React from 'react';
import moment from 'moment';
import './weather.css'
const CardExampleCard = ({ weatherData }) => {
    const icon = weatherData.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  
    return (
      <div id='weather' className="main">
        <p className="header">{weatherData.name}</p>
        <div className="flex">
          <p className="day"> {moment().format('dddd')}</p>
          <p className="day">{moment().format('LL')}</p>
        </div>
        <div className='flex-icon'>
                  <img className='icon' src={imageURL} alt="Weather Icon" />
        </div>
  
        <div className="flex-md">
          <p className="temp">Temperature: {Math.floor(weatherData.main.temp)} °C</p>
        </div>
      </div>
    );
  };
  
  export default CardExampleCard;