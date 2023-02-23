import axios from "axios"

const autoCompleteApi = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/place/autocomplete/json'
})

export async function getAutoComplete(query, setListLocation){
    const req = `?input=${query}&key=AIzaSyC5NCU1LYARiziXhEVI1CE-X0NmfcPjapY`
    const res = await autoCompleteApi.get(req)

    // Set Location
    console.log(res.data)
    setListLocation(res.data)
}