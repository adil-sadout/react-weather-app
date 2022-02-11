

export default function TodayTemp(props) {
    const {todayConditions, location} = props;
    return (
      <div>
          <p>Today's temperature in {location} is: {todayConditions?.temp?.day +"°C" ?? "As usual ;)"}</p>
      </div>
    );
}