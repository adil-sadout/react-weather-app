

export default function DateWeather(props) {

  const {forecast} = props;

    return (
      <div>
          <h3>{forecast.day}</h3>
          <p>Low: {forecast.low}</p>
          <p>High: {forecast.high}</p>
          <p>Expect: {forecast.text}</p>
      </div>
    );
}