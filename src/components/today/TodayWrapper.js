import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";

export default function TodayWrapper(props) {
    const {onDateEpochConverter, todayConditions,  fetchedLocation} = props;

    return (
      <div className="p-5">
          <TodayTemp fetchedLocation={fetchedLocation} todayConditions={todayConditions} />
          <TodayDetails todayConditions={todayConditions} onDateEpochConverter={onDateEpochConverter}/>
      </div>
    )
}