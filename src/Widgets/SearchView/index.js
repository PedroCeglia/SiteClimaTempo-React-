import {useState} from "react"
import "./style.css"

// Import Google Place AutoComplete
import {usePlacesWidget} from 'react-google-autocomplete'

export default function SearchView(props){ 

    const [inputSearchView, setInputSearchView] = useState('')

    // Buscar na API de Clima Tempo
    function searchWeather(){
        if(inputSearchView != null && inputSearchView != "" && props.setSearch != null){
            props.setSearch(inputSearchView)
        }
    }

    // Google AutoComplete  
    const { ref } = usePlacesWidget({
        apiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            setInputSearchView(place.address_components[0].long_name)
        }
    })

    return(
        <div className='search-view-container'>
            <input ref={ref}  type="text" value={inputSearchView} onChange={(e)=>{setInputSearchView(e.target.value)}}/>
            <button onClick={searchWeather}><img src="./icons/search.png" alt='Search Icon' /></button>
        </div>
    )
}