1. Weather API Integration:
   - [x] Sign up for an API key using OpenWeatherMap (or an equivalent free weather API service). Note: OpenWeatherMap API keys can take up to an hour to activate after account creation, so set up your account right away.
   - ex. api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=568c8269fc7843086c64a04a59e479c1
2. Asynchronous Data Fetching:
   - [x] Use the native JavaScript fetch API (or async/await) to execute GET requests to retrieve live weather data based on the targeted city.
3. Interactive Search & State Management:
   - [x] Provide an input form/field that allows users to 
     - [x] type in a city name and 
     - [x] update the displayed weather information dynamically upon submission or input change.
4. Display Core Metrics & Safe Access:
   - [x] Display key metrics including 
     - [x] current temperature, 
     - [x] humidity, and 
     - [x] wind speed. 
   - [x] Implement safe navigation to gracefully handle asynchronous delay before data arrives.
5. Visual Styling:
   - [x] Style the application using CSS to ensure a clean, responsive, and user-friendly interface.

```json
{
  "coord": {
    "lon": -111.971,
    "lat": 41.0602
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 300.66,
    "feels_like": 299.75,
    "temp_min": 299.72,
    "temp_max": 301.81,
    "pressure": 1010,
    "humidity": 26,
    "sea_level": 1010,
    "grnd_level": 852
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.69,
    "deg": 170
  },
  "clouds": {
    "all": 21
  },
  "dt": 1791577224,
  "sys": {
    "type": 2,
    "id": 2029225,
    "country": "US",
    "sunrise": 1791552766,
    "sunset": 1791593830
  },
  "timezone": -21600,
  "id": 5777107,
  "name": "Layton",
  "cod": 200
}
```