import React from "react";


const Weather = (props) =>  {
        return (
            <div className="info ">
                <div className="flex">

                    { props.city && 
                    <h4 className="city">
                        <img className="loc" src="https://programmerraja.github.io/weatherapp/static/media/map-pointer.88e10ef0.png"></img>  {props.city} | {props.country} <hr></hr>
                    </h4>
                    } 

                    { props.Temperature && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/temp.svg"></img>
                        <span className="info_value">{`${Math.floor(props?.Temperature )}°C`} <span>Temperature</span> </span>
                    </p>
                    }

                    { props.humidity && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/humidity.svg"></img>
                        <span className="info_value"> {props.humidity }% <span>Humidity</span> </span>
                    </p>
                    }

                    { props.description && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/cloudy-night.svg"></img>
                        <span className="info_value"> {props.description} <span>Description</span> </span>
                    </p>
                    }

                    { props.error && <p className="error"> {props.error}</p> }

                    
                </div>  
            </div>
        );
}

export default Weather;