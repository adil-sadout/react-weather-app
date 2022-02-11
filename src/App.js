import {useState/*, useEffect*/} from "react";
import Wrapper from "./components/Wrapper";
export default function App() {

  const [location, setLocation] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(false);



/*
  useEffect(()=>{
    console.log("apiResponse state has been changed")
    console.log(apiResponse);
  },[apiResponse])
*/
  function fetchWeather(theLocation){

    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${theLocation}&format=json&u=c`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": "95164ec703msh88844cc1f0d8036p1ea4dfjsnf5e6e08f6b94"
      }
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      setApiResponse(data);
      setFetchSuccess(true)
      
      
    })
    .catch(err => {
      console.error(err);
      alert("Cannot fetch weather at the moment, please try later!");
      setFetchSuccess(false)
    }).finally(()=>{
      //console.log("this is the state in finally stage");
      //console.log(apiResponse);
    }
      
    )
  }
  
  //BETTER API FOR WEATHER https://openweathermap.org/appid

  return (
    <div>
        
        <Wrapper onFetchWeather={fetchWeather} setLocation={setLocation} location={location} apiResponse={apiResponse} fetchSuccess={fetchSuccess} />
    </div>
  );
}

