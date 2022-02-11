import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";
import TodayImage from "./TodayImage";

export default function TodayWrapper(props) {
    const {onDateEpochConverter, todayConditions,  fetchedLocation} = props;

    return (
      <div>
          <TodayImage />
          <TodayTemp fetchedLocation={fetchedLocation} todayConditions={todayConditions} />
          <TodayDetails todayConditions={todayConditions} onDateEpochConverter={onDateEpochConverter}/>
      </div>
    )
}