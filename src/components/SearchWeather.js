


export default function SearchWeather(props){

    const {onFetchLongLatApi, setLocation, location} = props;

    function keyboardClick(event){

        // Number 13 is the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            onFetchLongLatApi(location)
        }

    }

    return(
        <div className="searchWeather">
            <label>
                <input onKeyDown={(e)=>keyboardClick(e)} placeholder="what's your city" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <button onClick={()=>{
                    onFetchLongLatApi(location)
                }} >Check Weather</button>
            </label>
        </div>
    )
}