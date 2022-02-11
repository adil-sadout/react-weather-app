import SearchWeather from "./SearchWeather";
import TodayWrapper from "./today/TodayWrapper";
import DatesWeather from "./dates/DatesWeather";

export default function Wrapper(props) {

  const {fetchSuccess, onFetchWeather, apiResponse, setLocation, location} = props;

  return (
    <>
      <SearchWeather onFetchWeather={onFetchWeather} setLocation={setLocation} />
    { (fetchSuccess === true) &&
      <div>
          <TodayWrapper location={location} currentObservation={apiResponse.current_observation} />
          <DatesWeather forecasts={apiResponse.forecasts} />
      </div>
    }
    </>
    
  );
}