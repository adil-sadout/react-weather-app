


export default function SearchWeather(props){

    const {onFetchLongLatApi, setLocation, location} = props;

    return(
        <div className="searchWeather">
            <label>
                <input placeholder="what's your city" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <button onClick={()=> onFetchLongLatApi(location)} >Check Weather</button>
            </label>
        </div>
    )
}