import { useState, useEffect, useCallback } from "react";
import DateInput from "./DateInputs";
let timer = 0;
function CityInput(props) {
  const { handleCity, cityInput, cityData, handleCityData, handleCoordinates, handleStartDate, handleEndDate, handleCitySelection } = props

  const fetchCityLoc = async () => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`
      );

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      handleCityData(data)

    } catch (error) {
      console.error("Error fetching city location:", error);
    }
  };

  const cityButtonClickHandler = (e) => {
    handleCoordinates(e)
    handleCitySelection(e)
    handleCityData({})

  }

  useEffect(() => {

    clearTimeout(timer);
    timer = setTimeout(function () {
      if (cityInput) {
        fetchCityLoc(cityInput);

      }
    }, 500);
  }, [cityInput])


  // console.log(cityData)

  if (cityData && Object.keys(cityData).length > 0) {
    return (
      <div className="input-dropdown-container w-full">
        <div className="input-container flex leading-10">
          <div className="city-input-container w-6/12">
            <input
              id="ville"
              type="text"
              name="ville"
              placeholder="enter a city"
              onChange={handleCity}
              className="w-full bg-customblack border border-customgray p-4 text-center rounded-l-md caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
            // autocomplete="off"
            />
          </div>
          <DateInput handleStartDate={handleStartDate} handleEndDate={handleEndDate} />
        </div>
        <div className="city-buttons-container absolute">
          {cityData.results.slice(0, 5).map((city, i) =>
            <div className="city-button  px-2 py-3 border border-transparent hover:border-b hover:bg-customblue hover:text-customblack duration-200 hover:translate-x-2" key={i}>
              <button id={i} key={i} onClick={cityButtonClickHandler}>{city.name}, {city.country}, {city.latitude}, {city.longitude}</button>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div className="input-dropdown-container w-full">
        <div className="input-container flex leading-10">
          <div className="city-input-container w-6/12">
            <input
              id="ville"
              type="text"
              name="ville"
              placeholder="select a city"
              onChange={handleCity}
              className=" focus:outline-none w-full bg-customblack border border-customgray p-4 text-center rounded-l-md caret-customblue duration-200 focus:border-transparent focus:border-b-customblue !outline-none"
            // autocomplete="off"
            />
          </div>
          <DateInput handleStartDate={handleStartDate} handleEndDate={handleEndDate} />
        </div>

      </div>

    )
  }
}

export default CityInput;

