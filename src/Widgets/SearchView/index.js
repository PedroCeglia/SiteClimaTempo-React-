import "./style.css"
import dotenv from "dotenv"
dotenv.config();

// Import Google Place AutoComplete
import {usePlacesWidget} from 'react-google-autocomplete'

export default function SearchView(props){ 
    const googleAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // Buscar na API de Clima Tempo
    function searchWeather(googlePlace){
        if(googlePlace != null && googlePlace != "" && props.setSearch != null){
            props.setSearch({
                placeName:googlePlace.formatted_address,
                lat:googlePlace.geometry.location.lat(),
                lng:googlePlace.geometry.location.lng()
            })
        }
    }

    // Google AutoComplete  
    const { ref } = usePlacesWidget({
        apiKey:googleAPIKey,
        onPlaceSelected: (place) => {
            searchWeather(place)
        }
    })

    return(
        <div className='search-view-container'>
            <input ref={ref}  type="text"/>
        </div>
    )
}