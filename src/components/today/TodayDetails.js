 

export default function TodayDetails(props) {

    const {onDateEpochConverter, todayConditions} = props;



    return (
      <>
          
          <p>Sunrise: {onDateEpochConverter(todayConditions.sunrise, 17,25)}, Sunset: {onDateEpochConverter(todayConditions.sunset, 17,25)}</p>
          <p>Sky: {todayConditions.weather[0].description} </p>
          <p>Humidity: {todayConditions.humidity}, Pressure: {todayConditions.pressure}</p>
      </>
    );
}