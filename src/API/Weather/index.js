import axios from 'axios'

const weatherApi = axios.create({
    baseURL:`https://api.openweathermap.org/data/2.5`
})

export async function getWeatherByLocation(location, setWeather){
    const req = `/weather?q=${location}&appid=2933fdc575fb70fe1fc480000280d512`
    const response = await weatherApi.get(req);
    setWeather(response.data)
    console.log(response.data)

}