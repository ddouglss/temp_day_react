import {useState, useRef} from 'react';
import './App.css';
import axios from 'axios';
import WeatherInfo from "./components/WeatherInfo/WeatherInfo.jsx";
import WeatherInfoFive from "./components/WeatherInfoFive/WeatherInfoFive.jsx";

function App() {
    const [weather, setWeather] = useState();
    const[fivedays, setFivedays] = useState();
    const inputRef = useRef();

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds = [
        "url('https://img.freepik.com/fotos-gratis/fundo-de-papel-de-parede-colorido-desfocado-vivido_58702-3769.jpg?semt=ais_hybrid&w=740')",
        "url('https://img.freepik.com/fotos-premium/resumo-107-gradiente-de-papel-de-parede-de-fundo_792836-190303.jpg?ga=GA1.1.1275934676.1745797908&semt=ais_hybrid&w=740')"
    ];

    async function searchCity() {
        const city = inputRef.current.value;
        const key = "c8feb77707661dbb4a3b16aa1afbd193";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

        const urlFivedays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

        const apiInfo = await axios.get(url);

        const apiInfoFivedays = await axios.get(urlFivedays);
        setFivedays(apiInfoFivedays.data);
        setWeather(apiInfo.data);
    }

    function changeBackground() {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }

    return (
        <div className='container' style={{backgroundImage: backgrounds[backgroundIndex]}}>

            <div className="princet">
                <h1>Previsão do Tempo

                    <button className="background-button" onClick={changeBackground}>
                        <h1 className='reload'> ⟳ </h1>
                    </button>

                </h1>
                <input ref={inputRef} type="text" placeholder="Digite o nome da cidade"/>
                <button className='button-buscar' onClick={searchCity}>Buscar</button>
                {weather && <WeatherInfo weather={weather}/>}
                {fivedays && <WeatherInfoFive fivedays={fivedays}/>}

            </div>


        </div>
    );
}

export default App;
