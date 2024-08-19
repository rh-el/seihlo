import React, { useState, useCallback, createContext, useContext } from "react";
import DataInput from "./components/DataInput";
import CityInput from "./components/CityInput";
import SubmitButton from "./components/SubmitButton";
import Graph from './components/Graph';
import "./App.css";
import IndiceChoice from "./components/IndiceChoice";
import TextInfos from "./components/TextInfos";

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

  const handleDataInput = useCallback(
    (e) => {
      setDataInput(e.target.id);
      setIndiceSelection('raw')
      rawData ? document.getElementById('raw').checked = true : null
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
      validDate(e.target.value) ? setStartDate(e.target.value) : null;
    },
    [startDate]
  );

  const handleEndDate = useCallback(
    (e) => {
      validDate(e.target.value) ? setEndDate(e.target.value) : null;
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

  const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
    const formattedDate = formatDateUrl(startDate, endDate);
    const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&daily=precipitation_sum&daily=snowfall_sum&daily=wind_speed_10m_max&daily=apparent_temperature_max`;
    const data = await (await fetch(formattedUrl)).json();
    setRawData(data);
    const climdexIndices = calculateIndices(dataInput, data);
    setIndicesResults(climdexIndices);
  };

  // console.log(selectedCity)

  return (
    <>
      <IndicesDataContext.Provider value={{ rawData, indicesResults }}>
        <div className="flex w-full gap-4">
          {rawData && (
            <IndiceChoice handleIndiceSelection={handleIndiceSelection} />
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
      </IndicesDataContext.Provider>
    </>
  );
}

export default App;
