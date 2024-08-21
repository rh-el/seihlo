function TextInfos(props) {
    const {selectedCity, startDate, endDate, dataInput, indiceSelection} = props
    // console.log(selectedCity)   
    let reqDataInput;
    switch (dataInput) {
        case 'temp':
            reqDataInput='temperature'
            break;
        case 'rain':
            reqDataInput="precipitation"
            break;
        case 'wind':
            reqDataInput='windspeed'
            break;
        case 'snow':
            reqDataInput="snowfall"
            break;
    }



    return (
        <>
        {/* <div className="mt-[78px] w-4/12"></div> */}
        <div className=" w-4/12 border border-gray-800 rounded-md p-2 text-customblue/70 h-fit top-[100px] sticky">
            <p>selected city: {selectedCity.name.toLowerCase()}</p>
            <p>country: {selectedCity.country.toLowerCase()}</p>
            <p>region: {selectedCity.admin1.toLowerCase()}</p>
            <p>coordinates: {selectedCity.latitude} / {selectedCity.longitude}</p>
            <br />
            <p>requested data: {reqDataInput}</p>
            <br />
            <p>data visualized: {indiceSelection}</p>           
        </div>
        </>
    )
}

export default TextInfos;