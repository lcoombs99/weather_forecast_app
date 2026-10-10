import styles from './WeatherData.module.css';


function WeatherData({data}) {
  const displayTemp = `${data.main.temp.toFixed()}°F`
  const displayFeelsLike = `${data.main.feels_like.toFixed()}°F`
  const displayHumidity = `${data.main.humidity.toFixed()}%`
  const displayWindSpeed = `${data.wind.speed.toFixed()} mph`
  const displayConditions = `${data.weather[0].description
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')}`

  return (
    <div className={styles.container}>
      <div className={styles.temperature}>
        <div className={styles.label}>Current Temperature</div>
        <div className={styles.value}>{displayTemp}</div>
      </div>

      <div className={styles.info}>
        <div className={styles.item}>
          <div className={styles.label}>Feels Like</div>
          <div className={styles.value}>{displayFeelsLike}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}>Humidity</div>
          <div className={styles.value}>{displayHumidity}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}>Wind Speed</div>
          <div className={styles.value}>{displayWindSpeed}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.label}>Condition</div>
          <div className={styles.value}>{displayConditions}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;