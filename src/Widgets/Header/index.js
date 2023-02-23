import { useState, useEffect } from "react"
import "./style.css"

// Import API
import { getAutoComplete } from '../../API/AutoComplete';

export default function Header(props){

    const [inputSearchView, setInputSearchView] = useState("")
    const [listAutoComplete, setListAutoComplete] = useState([])

    function searchWeather(){
        if(inputSearchView != null && props.setSearch != null){
            props.setSearch(inputSearchView)
        }
    }

    function inputsChange(text){
        setInputSearchView(text)
        if( text != null){
            console.log("oioioi")
            getAutoComplete(text, setListAutoComplete)
        }
    }

    return(
        <header>
            <div className='search-view-container'>
                <input type="text" onChange={(e)=>{inputsChange(e.target.value)}} value={inputSearchView} />
                <button onClick={searchWeather}><img src="./icons/search.png" alt='Search Icon' /></button>
            </div>
        </header>
    )
}