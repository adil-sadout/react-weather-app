

export default function DateWeather(props) {

  const {forecast, onDateEpochConverter} = props;

  //console.log(forecast)

    return (
      <div className="col-md-5 mx-auto g-4 border border-dark p-5">
          <h3>{onDateEpochConverter(forecast.dt,0,11)}</h3>
          <p>Low: {forecast.temp.min} °C</p>
          <p>High: {forecast.temp.max} °C</p>
          <p>Expect: {forecast.weather[0].description}</p>
      </div>
    );
}