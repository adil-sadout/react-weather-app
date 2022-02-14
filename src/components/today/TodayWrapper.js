import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";

export default function TodayWrapper(props) {
    const {onDateEpochConverter, todayConditions,  fetchedLocation} = props;

    return (
      <div className="pt-5 pb-4 text-center">
          <TodayTemp fetchedLocation={fetchedLocation} todayConditions={todayConditions} />
          <TodayDetails todayConditions={todayConditions} onDateEpochConverter={onDateEpochConverter}/>
      </div>
    )
}