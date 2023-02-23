import "./style.css"

export default function Main(props){

    const weather = props.weather;

    return(
        <div className='clima-tempo-container'>
            <p>Nome da Cidade -- {weather.name}</p>
            <p>Nome do Estado</p>
            <p>Nome do Pais</p>
            <p>Temperatura °C </p>
            <p>Tempo:</p>
            <p></p>
            <p>Nome do Lugar</p>
        </div>
    )
}