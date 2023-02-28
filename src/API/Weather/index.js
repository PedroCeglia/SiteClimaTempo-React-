import axios from 'axios'

const weatherApi = axios.create({
    baseURL:`https://api.openweathermap.org/data/2.5`
})
const weatherForecastApi = axios.create({
    baseURL:`https://api.openweathermap.org/data/3.0`
}) 

// Recupera o clima a partir de um nome
// A partir dele recuperamos a latitude e a longitude
export async function getWeatherByLocation(location, setWeather){
    const req = `/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    const response = await weatherApi.get(req);
    setWeather({
        lat:response.data.coord.lat,
        lon:response.data.coord.lon,
        cod:response.data.cod
    })
}
// Recuperamos a Previsão da Semana e do Dia a partir de uma latitude e uma longitude
export async function getWeatherByLatLon(lat, lon, setWeather){
    const req = `/onecall?lat=${lat}&lon=${lon}&lang=pt_br&exclude=minutely,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    const response = await weatherForecastApi.get(req);
    setWeather(response.data)
    console.log(response.data)
}