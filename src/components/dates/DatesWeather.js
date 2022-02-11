import DateWeather from "./DateWeather.js"

export default function DatesWeather(props) {

    const {forecasts} = props;
    return (
      <div>
          {
            forecasts.map((forecast, index) => <DateWeather key={index} forecast={forecast} /> )
          }
      </div>
    )
}
