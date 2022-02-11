import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";
import TodayImage from "./TodayImage";

export default function TodayWrapper(props) {
    const {onDateEpochConverter, todayConditions, location} = props;

    return (
      <div>
          <TodayImage />
          <TodayTemp location={location} todayConditions={todayConditions} />
          <TodayDetails todayConditions={todayConditions} onDateEpochConverter={onDateEpochConverter}/>
      </div>
    )
}