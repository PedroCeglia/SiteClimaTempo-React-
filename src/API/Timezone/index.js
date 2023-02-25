import axios from "axios"

const timezoneRef = axios.create({
    baseURL:'https://atlas.microsoft.com/timezone/byCoordinates'
})

export async function getTimezone(query, setTimezone){
    const req = `/json?api-version=1.0&query=${query}`
    const res = await timezoneRef.get(req)
    // Set Location
    console.log(res.data)
    setTimezone(res.data)
}