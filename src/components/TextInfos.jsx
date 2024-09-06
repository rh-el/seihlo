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
            <p className="hidden md:block">selected city: {selectedCity.name.toLowerCase()}</p>
            <p className="hidden md:block">country: {selectedCity.country.toLowerCase()}</p>
            <p className="hidden md:block">region: {selectedCity.admin1.toLowerCase()}</p>
            <p className="hidden md:block">coordinates: {selectedCity.latitude} / {selectedCity.longitude}</p>
            <br />
            <p className="hidden md:block">requested data: {reqDataInput}</p>
            <br />
            <p className="hidden md:block">displayed climdex indice: {indiceSelection}</p>
            <br />
            <p className="hidden md:block">indice informations: {indicesInfos}</p>
        </>
    )
}

export default TextInfos;

const textInfosStyle = {
    transitionDuration: '0.5s',
    transitionTimingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)'    
}