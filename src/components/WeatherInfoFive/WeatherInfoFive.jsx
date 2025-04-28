import './WeatherInfoFive.css';


function WeatherInfoFive({fivedays}) {
    console.log(fivedays.list);

    let dailyForecast = {};

    for (let forecast of fivedays.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }
    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
        return newDate;
    }

    return (
        <div className="weather-container">
            <h3>Previsão Próximos 5 Dias </h3>

            <div className='list'>
                {nextFiveDays.map(fordays => (
                    <div key={fordays.dt} className='item'>

                        <p className='days'>{convertDate(fordays)}</p>

                        <img src={`http://openweathermap.org/img/wn/${fordays.weather[0].icon}.png`}
                             alt="Icone do tempo"
                        />
                        <p className='description'>{fordays.weather[0].description}</p>

                        <p className='max-min'>{Math.round(fordays.main.temp_min)} ºC min /{''}
                            {Math.round(fordays.main.temp_max)} ºC máx
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherInfoFive;
