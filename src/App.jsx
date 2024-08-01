import React, { useState, useCallback, createContext, useContext } from "react";
import DataInput from "./components/DataInput";
import CityInput from "./components/CityInput";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

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

  const handleDataInput = useCallback(
    (e) => {
      setDataInput(formatDataUrl(e.target.id));
    },
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

  const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
    const formattedDate = formatDateUrl(startDate, endDate);
    const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&${dataInput}`;
    const data = await (await fetch(formattedUrl)).json();
    setRawData(data);
    const climdexIndices = calculateIndices(dataInput, data);
    setIndicesResults(climdexIndices);
  };

  // console.log(dataInput);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(coordinates);
  // console.log(rawData);

  return (
    <>
      <IndicesDataContext.Provider value={{ rawData, indicesResults }}>
        <div className="w-full flex flex-col gap-4" >
        <DataInput handleDataInput={handleDataInput} />
        <CityInput
          handleCity={handleCity}
          cityInput={cityInput}
          handleCityData={handleCityData}
          cityData={cityData}
          handleCoordinates={handleCoordinates}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
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
      </IndicesDataContext.Provider>
    </>
  );
}

export default App;
