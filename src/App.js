import { useEffect, useState } from 'react';
import './App.css';

// Import API
import { getWeatherByLocation } from './API/Weather';

// Import Widgets
import Header from './Widgets/Header';
import Main from './Widgets/Main';

function App() {

  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState(null)

  // API Weather
  useEffect(()=>{
    if(search != ''){
      // Buscar Por Respostas
      getWeatherByLocation(search, setWeather)
    }
  },[search])


  return (
    <div className="App">
      <Header setSearch={setSearch} setInputSearch={setInputSearch}/>
      <Main weather={weather}/>
    </div>
  );
}

export default App;
