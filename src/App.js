import {useState/*, useEffect*/} from "react";
import Wrapper from "./components/Wrapper";
export default function App() {

  const [location, setLocation] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(false);




  function fetchLongLatApi(theLocation){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${theLocation}&limit=1&appid=fc3035ec0e07a38552cd853e7bd7bef6`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      fetchWeather(data[0].lon, data[0].lat)
      
    })
    .catch(err => console.err("We are facing issues finding the location's weather, please try again later!"))
    .finally(console.log("done fetching"))
  }


  function fetchWeather(long, lat){

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=current,minutely,hourly,alerts&appid=fc3035ec0e07a38552cd853e7bd7bef6`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setApiResponse(data);
      setFetchSuccess(true)
      
      
    })
    .catch(err => {
      console.error(err);
      alert("Cannot fetch weather at the moment, please try later!");
      setFetchSuccess(false)
    })
  }
  
  //BETTER API FOR WEATHER https://openweathermap.org/appid

  return (
    <div>
        
        <Wrapper onFetchLongLatApi={fetchLongLatApi} setLocation={setLocation} location={location} apiResponse={apiResponse.daily} fetchSuccess={fetchSuccess} />
    </div>
  );
}

