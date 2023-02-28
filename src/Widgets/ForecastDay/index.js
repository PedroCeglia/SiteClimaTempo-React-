import { useState, useEffect } from "react"
import './style.css'

// Import Services
import { getDateByTimezone } from "../../API/Timezone"

export default function ForecastDay(props){

    // Recuperando Timezone && Lista de Previsão do Dia
    const [forecastDay,setForecastDay] = useState([])
    const [horaTimezone, setHoraTimezone] = useState(0)
    useEffect(()=>{
        if(props.timezone != null && props.forecastDay != null){
            // Recuperando Hora Local
            const horaLocal = getDateByTimezone(props.timezone).getHours()
            setHoraTimezone(horaLocal)

            // Recuperando Previsões do Dia
            const filterHoras = props.forecastDay.filter((dia, index)=> index <14)
            setForecastDay(filterHoras)
            console.log(filterHoras)
        }
    },[props.timezone, props.forecastDay])

    return(
        <div className="forecast-day-container">
            <span className="header-main">Previsões do Dia</span>
            <div className="forecast-day-list">
                {
                    forecastDay.map((hora, key)=>{
                        // Recuperar Icon URL
                        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${hora.weather[0]["icon"]}.svg`

                        // Recuperar Hora
                        const horaItem = (horaTimezone + key)
                        const horaFinal = (horaItem>23)?horaItem - 24:horaItem
                        const horaFinalStr = (horaFinal.toString().length == 1)?"0" + horaFinal:horaFinal
                        
                        // Recuperar Temp
                        const temperatura =(hora.temp - 273.15).toString().slice(0,4)
                        return(
                            <div className="forecast-day-item" key={key}>
                                <span className="span-hora">{horaFinalStr}h</span>
                                <img src={icon} alt=" Weather Icon "/>
                                <span className="span-temp">{temperatura}°C</span>
                            </div>                            
                        )
                    })
                }
            </div>
        </div>
    )
}