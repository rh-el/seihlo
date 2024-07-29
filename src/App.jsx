import { useState } from "react";
import DataInput from "./components/DataInput";
import CityInput from "./components/CityInput";

import "./App.css";

function App() {
  const [dataInput, setDataInput] = useState();
  const [city, setCity] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function handleCity() {}

  function handleStartDate() {}

  function handleEndDate() {}

  return (
    <>
      <CityInput handleCity={handleCity}></CityInput>
      <DateInput
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
      ></DateInput>
      <DataInput DateInput={dataInput}></DataInput>
    </>
  );
}

export default App;
