import React, { useState, useCallback, createContext, useContext } from "react";
import DataInput from "../components/DataInput";
import CityInput from "../components/CityInput";
import SubmitButton from "../components/SubmitButton";
import Graph from '../components/Graph';
import IndiceChoice from "../components/IndiceChoice";
import TextInfos from "../components/TextInfos";

export const IndicesDataContext = createContext(null);

function App() {
  const [dataInput, setDataInput] = useState(null);
  const [cityInput, setCityInput] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rawData, setRawData] = useState(null);
  const [indicesResults, setIndicesResults] = useState(null);
  const [indiceSelection, setIndiceSelection] = useState('raw');
  const [selectedCity, setSelectedCity] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleDataInput = useCallback(
    (e) => {
      setDataInput(e.target.id);
      e.target.id === 'temp' ? setIndiceSelection('txx') : setIndiceSelection('r10mm')
      // setIndiceSelection('raw')
      // rawData ? document.getElementById('raw').checked = true : null
    }
    ,
    [dataInput]
  );

  const handleCity = useCallback(
    (e) => {
      setCityInput(e.target.value);
    },
    [cityInput]
  );

  const handleCityData = useCallback(
    (data) => {
      setCityData(data);
    },
    [cityData]
  );

  const handleCoordinates = useCallback(
    (e) => {
      setCoordinates(
        formatLocalisationUrl([
          cityData.results[e.target.id].latitude,
          cityData.results[e.target.id].longitude,
        ])
      );
    },
    [cityData, coordinates]
  );

  const handleStartDate = useCallback(
    (e) => {
      // validDate(e.target.value) ? setStartDate(e.target.value) : null;
      setStartDate(e.target.value + '-01-01')
    },
    [startDate]
  );

  const handleEndDate = useCallback(
    (e) => {
      // validDate(e.target.value) ? setEndDate(e.target.value) : null;
      setEndDate(e.target.value + '-12-31')
    },
    [endDate]
  );

  const handleIndiceSelection = useCallback(
    (e) => {
      setIndiceSelection(e.target.id)
    },
    [indiceSelection]
  )

  const handleCitySelection = useCallback(
    (e) => {
      setSelectedCity(cityData.results[e.target.id])
    },
    [cityData]
  )

  // const handleLandingMode = useCallback(
  //   () => {
  //     setLandingMode(!landingMode)
  //   }
  // )

  const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
    setLoader(true)
    const formattedDate = formatDateUrl(startDate, endDate);
    const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&daily=precipitation_sum&daily=apparent_temperature_max`;
    const data = await (await fetch(formattedUrl)).json();
    setLoader(false)
    console.log(loader)
    setRawData(data);
    const climdexIndices = calculateIndices(data);
    setIndicesResults(climdexIndices);

  };


  return (

    <>
      <IndicesDataContext.Provider value={{ rawData, indicesResults }}>
        {!loader && (
          <div className={rawData ? "flex w-full gap-4" : "flex w-1/2 gap-4"} >
            {rawData && (
              <IndiceChoice handleIndiceSelection={handleIndiceSelection} dataInput={dataInput} />
            )}
            <div className="w-full flex flex-col gap-4" >
              <DataInput handleDataInput={handleDataInput} />
              <Graph dataInput={dataInput} indiceSelection={indiceSelection} />
              <CityInput
                handleCity={handleCity}
                cityInput={cityInput}
                handleCityData={handleCityData}
                cityData={cityData}
                handleCoordinates={handleCoordinates}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                handleCitySelection={handleCitySelection}
              />
              <SubmitButton
                dataInput={dataInput}
                coordinates={coordinates}
                startDate={startDate}
                endDate={endDate}
                rawData={rawData}
                setRawData={setRawData}
                handleFetch={handleFetch}
              />
            </div>
            {rawData && (
              <TextInfos 
              coordinates={coordinates}
              selectedCity={selectedCity}
              startDate={startDate}
              endDate={endDate}
              dataInput={dataInput}
              indiceSelection={indiceSelection}
              />
            )}
          </div>
        )}
        {loader && (
          <div>loading ........</div>
        )}

      </IndicesDataContext.Provider>
    </>
  );
}

export default App;
