import React, {useContext} from "react"
import "../styles/weather.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, } from "@fortawesome/free-solid-svg-icons"
import Context from "../Context"

const WeatherUI = () => {
    const {Date, temp, humid, speed, precip, desc, location} = useContext(Context)
    return (
        <div className="container">
            <div className="weather-side">
                <div className="weather-gradient"></div>
                <div className="date-container">
                    <h2 className="date-dayname">Tuesday</h2><span className="date-day">{Date}</span>
                    <span className="logo"><FontAwesomeIcon icon = {faMapMarkerAlt} size = "1x" /></span>
                    <span className="location">{location}</span></div>
                <div className="weather-container">
                    <i className="weather-icon" data-feather="sun"></i>
                    <h3 className="weather-temp">{temp}°C</h3>
                    <h3 className="weather-desc">{desc}</h3>
                </div>
            </div>
            <div className="info-side">
                <div className="today-info-container">
                    <div className="today-info">
                        <div className="precipitation"> <span className="title">PRECIPITATION  </span><span className="value">{precip} %</span>
                            <div className="clear"></div>
                        </div>
                        <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{humid} %</span>
                            <div className="clear"></div>
                        </div>
                        <div className="wind"> <span className="title">WIND</span><span className="value">{speed} km/h</span>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="Aqi-container">
                    <h2>AQI LEVEL</h2>
                    <h1 className = "AQI" >196</h1>
                    <h5>Unhealthy</h5>

                </div>
            </div>
        </div>
    )
}

export default WeatherUI