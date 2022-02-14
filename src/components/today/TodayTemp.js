

export default function TodayTemp(props) {
    const {todayConditions, fetchedLocation} = props;
    console.log(todayConditions)
    let location = <strong dangerouslySetInnerHTML={{__html: fetchedLocation}}></strong>
    return (
      <>
          <h2>Today's Conditions</h2>
          <p>The Current temperature in {location}  is: {todayConditions?.temp?.day +"°C" ?? "As usual ;)"}</p>
      </>
    );
}