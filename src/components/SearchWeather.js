


export default function SearchWeather(props){

    const {onFetchWeather, setLocation, location} = props;

    return(
        <div className="searchWeather">
            <label>
                <input placeholder="what's your city" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <button onClick={()=> onFetchWeather(location)} >Check Weather</button>
            </label>
        </div>
    )
}