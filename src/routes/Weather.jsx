import { useState, useEffect } from 'react'

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=f066c311c69e45a3bb3141821230903&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        setWeatherForecast(data)
      });
  };

  return (
    <main className='container'>
      <div className='jumbotron'>
        <h1>Verifique agora a previsão do tempo da sua cidade!</h1>
        <p className='lead'>Dgitie o nome da sua cidade no campo abaixo e em seguida clique em pequisar</p>
        <div className='row mb-4'>
          <div className='col-md-6'>
            <input
              onChange={handleChange}
              className='form-control'
              value={city}
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className='btn btn-primary bg-secondary'
        >
          Pesquisar</button>

        {weatherForecast ? (
          <div>
            <div className='mt-4 d-flex align-items-center'>
              <div>
                <img src={weatherForecast.current.condition.icon} alt="weather-icon" />
              </div>

              <div>
                <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                <p className='lead'>Temperatura: {weatherForecast.current.temp_c}</p>
              </div>

            </div>
          </div>
        )
          : null}
      </div>
    </main>
  )
}


export default Weather