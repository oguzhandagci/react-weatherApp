import React from 'react';

function App() {
  let weather = {
    apiKey: "250e79ecd3f58165aeaa01a3dcdb39a9",
   fetchWeather: function (zip) {
     fetch(
         "https://api.openweathermap.org/data/2.5/weather?zip="+ zip +",us&appid=" + this.apiKey +"&units=imperial"
         )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data));
   },
   displayWeather: function (data) {
     const { name } = data;
     const { icon, description } = data.weather[0];
     const { temp, humidity, temp_min, temp_max, feels_like } = data.main;
     const { speed } = data.wind;
     const time = new Date();
     document.querySelector(".city").innerText = "Weather in " + name;
     document.querySelector(".icon").src =
       "https://openweathermap.org/img/wn/" + icon + "@2x.png";
     document.querySelector(".description").innerText = description;
     document.querySelector(".temp").innerText = parseFloat(temp).toFixed(1) + " °F";
     document.querySelector(".humidity").innerText =
       "Humidity: " + humidity + "%";
     document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
     document.querySelector(".weather").classList.remove("loading");
     document.querySelector(".lowTemp").innerText = "Lowest: " + temp_min;
     document.querySelector(".highTemp").innerText = "Highest: " + temp_max;
     document.querySelector(".feels").innerText = "Feels Like:" + feels_like;
     document.querySelector(".date").innerText = "Date: " + time;
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
   }
 };
 
 const searchClick = () => {
  const zipValue = document.querySelector(".search-bar").value;
  weather.fetchWeather(zipValue);
 }
 
   weather.fetchWeather("28012");
  return (
    <div className="App">
      <div className="card">
        <header className="heading">Ozzy's Weather App</header>
      <div className="search">
        <input type="text" className="search-bar" placeholder="Enter the Zipcode" />
        <button onClick={searchClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#616161">
              <rect
                x="34.6"
                y="28.1"
                transform="matrix(.707 -.707 .707 .707 -15.154 36.586)"
                width="4"
                height="17"
              ></rect>
              <circle cx="20" cy="20" r="16"></circle>
            </g>
            <rect
              x="36.2"
              y="32.1"
              transform="matrix(.707 -.707 .707 .707 -15.839 38.239)"
              fill="#37474F"
              width="4"
              height="12.3"
            ></rect>
            <circle fill="#64B5F6" cx="20" cy="20" r="13"></circle>
            <path
              fill="#BBDEFB"
              d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="weather loading">
        <h2 className="city">Weather in Denver</h2>
        <h1 className="temp">51° F</h1>
        <div className="flex">
          <img src="https://openweathermap.org/img/wn/04n.png" alt="default" className="icon" />
          <div className="description">Cloudy</div>
        </div>
        <div className="humidity">Humidity 60%</div>
        <div className="wind">Wind Speed: 6.2 km/h</div>
        <div className="lowTemp">Lowest:</div>
        <div className="highTemp">Highest</div>
        <div className="feels">64</div>
        <div className="date">Date:</div>
      </div>
    </div>
    </div>
  );
}

export default App;
