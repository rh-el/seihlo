import { useState, useCallback } from "react";
import DataInput from "./components/DataInput";
import CityInput from "./components/CityInput";
import DateInput from "./components/DateInputs";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

function App() {
  const [dataInput, setDataInput] = useState(null);
  const [cityInput, setCityInput] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rawData, setRawData] = useState(null);

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

  // console.log(dataInput);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(coordinates);
  console.log(rawData);

  return (
    <>
      <DataInput handleDataInput={handleDataInput} />
      <CityInput
        handleCity={handleCity}
        cityInput={cityInput}
        handleCityData={handleCityData}
        cityData={cityData}
        handleCoordinates={handleCoordinates}
      />
      <DateInput
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
      />
      <SubmitButton
        dataInput={dataInput}
        coordinates={coordinates}
        startDate={startDate}
        endDate={endDate}
        setRawData={setRawData}
      />
    </>
  );
}

export default App;
