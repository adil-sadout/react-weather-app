import SearchWeather from "./SearchWeather";
import TodayWrapper from "./today/TodayWrapper";
import DatesWeather from "./dates/DatesWeather";

export default function Wrapper(props) {

  const {fetchSuccess, onFetchLongLatApi, apiResponse, setLocation, location, fetchedLocation} = props;

  function dateEpochConverter(epochDate, startchar="0", endchar="25"){
    let myDate = new Date(epochDate *1000);
    let readableDate = myDate.toGMTString()+"<br>"+myDate.toLocaleString();
    let dateTiming=readableDate.substring(startchar,endchar)
    return (dateTiming)
  }

  

  return (
    <>
      <SearchWeather onFetchLongLatApi={onFetchLongLatApi} location={location} setLocation={setLocation} />
    { (fetchSuccess === true) &&
      <>
        <TodayWrapper fetchedLocation={fetchedLocation} todayConditions={apiResponse[0]} onDateEpochConverter={dateEpochConverter} />
        <div className="container">
            <DatesWeather forecasts={apiResponse} onDateEpochConverter={dateEpochConverter} />
        </div>
      </>
    }
    </>
    
  );
}