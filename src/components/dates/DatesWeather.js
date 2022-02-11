import DateWeather from "./DateWeather.js"

export default function DatesWeather(props) {

    const {forecasts, onDateEpochConverter} = props;
    return (
      <div>
          {
            forecasts.map((forecast, index) => <DateWeather key={index} forecast={forecast} onDateEpochConverter={onDateEpochConverter} /> )
          }
      </div>
    )
}
