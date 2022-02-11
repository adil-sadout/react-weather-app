 

export default function TodayDetails(props) {

    const {todayConditions} = props;

    return (
      <div>
          <h2>Today's Conditions</h2>
          <p>Sunrise: {todayConditions.astronomy.sunrise}, Sunset: {todayConditions.astronomy.sunset}</p>
          <p>Sky: {todayConditions.condition.text} </p>
          <p>Humidity: {todayConditions.atmosphere.humidity}, Pressure: {todayConditions.atmosphere.pressure}</p>
      </div>
    );
}