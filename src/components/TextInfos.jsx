function TextInfos(props) {
    const {selectedCity, startDate, endDate, dataInput, indiceSelection} = props
    let reqDataInput;
    const indicesInfos = indiceText(indiceSelection)
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
        <div id='text-infos' className=" w-4/12 border border-gray-800 rounded-md p-2 text-customblue/70 h-fit top-[100px] sticky " style={textInfosStyle}>
            <p>selected city: {selectedCity.name.toLowerCase()}</p>
            <p>country: {selectedCity.country.toLowerCase()}</p>
            <p>region: {selectedCity.admin1.toLowerCase()}</p>
            <p>coordinates: {selectedCity.latitude} / {selectedCity.longitude}</p>
            <br />
            <p>requested data: {reqDataInput}</p>
            <br />
            <p>displayed climdex indice: {indiceSelection}</p>
            <br />
            <p>indice informations: {indicesInfos}</p>
            {/* <p>scrolly: {window.scrollY} </p>            */}
        </div>
        </>
    )
}

export default TextInfos;

const textInfosStyle = {
    transitionDuration: '0.5s',
    transitionTimingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)'    
}