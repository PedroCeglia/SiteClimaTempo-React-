import axios from 'axios'

const weatherApi = axios.create({
    baseURL:`https://api.openweathermap.org/data/2.5`
})

export async function getWeatherByLocation(location, setWeather){
    const req = `/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    const response = await weatherApi.get(req);
    setWeather(response.data)
    console.log(response.data)

}