import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";
import TodayImage from "./TodayImage";

export default function TodayWrapper(props) {
    const {currentObservation, location} = props;

    return (
      <div>
          <TodayImage />
          <TodayTemp location={location} todayConditions={currentObservation} />
          <TodayDetails todayConditions={currentObservation} />
      </div>
    )
}