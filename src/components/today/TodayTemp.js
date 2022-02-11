

export default function TodayTemp(props) {
    const {todayConditions, fetchedLocation} = props;
    console.log(todayConditions)
    return (
      <div>
          <p>Today's temperature in {fetchedLocation} is: {todayConditions?.temp?.day +"°C" ?? "As usual ;)"}</p>
      </div>
    );
}