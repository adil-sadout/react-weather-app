

export default function TodayTemp(props) {
    const {todayConditions, location} = props;
    console.log(todayConditions)
    return (
      <div>
          <p>Today's temperature in {location} is: {todayConditions?.temp?.day +"°C" ?? "As usual ;)"}</p>
      </div>
    );
}