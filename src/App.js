import React, {Component} from "react";
import "./App.css";
import "./fontawesome.min.css";
import Weather from "./compontents/Weather";
import Form from "./compontents/Form";

  //   Key Api--------
const API_KEY = "e95887299da956b691a9e33312762e8d";


class App extends Component {

  state = {
    Temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }


  //    Fetch api---------
  getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await  api.json();
    if (city) {
      this.setState({
        Temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
        
      })
    } else{
      this.setState({
        Temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter The City ...! '
      })
    }
  }

  render() { 
  return (
    <div className="wrapper">
      <div className="form-container" >
          <div className="head">
              <h2>React <span className="color">Weather</span> App</h2>
              <img className="cloud" src="https://ayushkul.github.io/react-weather-app/icons/perfect-day.svg"></img>
              <br></br>
          </div>

          <Form getWeather={this.getWeather}/>

          <Weather 
          Temperature= {this.state.Temperature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
          />
        
      </div> 

      
    </div>
  );
  }
}

export default App;
