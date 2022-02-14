


export default function SearchWeather(props){

    const {onFetchLongLatApi, setLocation, location} = props;

    function keyboardClick(event){
        if (event.key === "Enter") {
            onFetchLongLatApi(location)
        }

    }

    return(
        <div className="text-center border pb-5 pt-5 bg-white">
            <label>
                <p> Check The Current Temperature Where You Live: </p>
                <input className="m-2" onKeyDown={keyboardClick} placeholder="what's your city" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <button className="btn btn-primary" onClick={()=>{
                    onFetchLongLatApi(location)
                }} >Check Weather</button>
            </label>
        </div>
    )
}