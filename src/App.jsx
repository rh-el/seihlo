import { useState, useCallback } from "react";
import DataInput from "./components/DataInput";
import CityInput from "./components/CityInput";
import DateInput from './components/DateInputs';
import "./App.css";

function App() {
  const [dataInput, setDataInput] = useState(null);
  const [cityInput, setCityInput] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDataInput = useCallback((e) => {
    setDataInput(e.target.id)
  }, [dataInput])

  const handleCity = useCallback((e) => {
    setCityInput(e.target.value)
  }, [cityInput])

  const handleCityData = useCallback((data) => {
    setCityData(data)
  }, [cityData])

  const handleCoordinates = useCallback((e) => {
    setCoordinates([cityData.results[e.target.id].latitude, cityData.results[e.target.id].longitude])
  }, [cityData, coordinates])

  const handleStartDate = useCallback((e) => {
    setStartDate(e.target.value)
  }, [startDate])

  const handleEndDate = useCallback((e) => {
    setEndDate(e.target.value)
  }, [endDate])

console.log(startDate, endDate)

  return (
    <>
      <DataInput handleDataInput={handleDataInput} />
      <CityInput handleCity={handleCity} cityInput={cityInput} handleCityData={handleCityData} cityData={cityData} handleCoordinates={handleCoordinates} />
      <DateInput handleStartDate={handleStartDate} handleEndDate={handleEndDate} />

    </>
  );
}

export default App;
