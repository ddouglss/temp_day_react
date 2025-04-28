import './WeatherInfo.css';


function WeatherInfo({ weather }) {

    return (
        <div className="weather-container">
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Icone do tempo" />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='other-info'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
