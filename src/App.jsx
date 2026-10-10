import './App.css';
import { useState } from 'react';
import WeatherData from './components/WeatherData.jsx';

function App() {
  const API_KEY = '568c8269fc7843086c64a04a59e479c1';

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    fetchWeatherHandler();
  };

  const fetchWeatherHandler = async () => {
    // loading true, error null
    setIsLoading(true);
    setError(null);

    // try/catch
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchLocation)}&units=imperial&APPID=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Unable to find matching location');
      }

      const data = await response.json();

      setWeatherData(data);

    } catch (err) {
      setError(err);
    }
    // loading false
    setIsLoading(false);
  };


  let content = <p></p>;

  // display weather data
  if (weatherData) {
    content = <WeatherData data={weatherData}/>;
  }

  // error message
  if (error) {
    content = <p>{error.message}</p>;
  }

  // loading message
  if (isLoading) {
    content = <p>Loading weather data...</p>;
  }

  return (
    <>
      <h1>Weather Forecast App</h1>

      <form onSubmit={submitHandler} className="container" autoComplete="off">
        <div className="form-group">
          <label htmlFor="location">Enter a City</label>
          <input
            type="text"
            id="location"
            value={searchLocation}
            onChange={(event) => setSearchLocation(event.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>

      <section>{content}</section>
    </>
  );
}

export default App;
