import { useState, useEffect, useCallback } from "react";
import DateInput from "./DateInputs";
let timer = 0;
function CityInput(props) {
  const { handleCity, cityInput, cityData, handleCityData, handleCoordinates, handleStartDate, handleEndDate, handleCitySelection, startDate, endDate } = props

  const fetchCityLoc = async () => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`
      );

      if (!response.ok) {
        throw new Error("Network error");
      }
      
      const data = await response.json();

      if (data.results) {
        handleCityData(data)
      } 

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
    console.log('use effect city input: ' + cityInput)
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (cityInput) {
        fetchCityLoc(cityInput);
      }
    }, 500);
  }, [cityInput])

  let dropDown;
  if (cityData && Object.keys(cityData).length > 0) {
    dropDown = cityData.results.slice(0, 5).map((city, i) =>
      <div className="city-button  px-2 py-1 border border-transparent hover:border-b hover:bg-customblue hover:text-customblack duration-200 " key={i}>
        <button className="text-left" id={i} key={i} onClick={cityButtonClickHandler}>{city.name.toLowerCase()}, {city.country && city.country.toLowerCase()}<br/> {city.latitude}, {city.longitude}</button>
      </div>
    )
  }


  // console.log(cityData)


    return (
      <div className="input-dropdown-container w-full">
        <div className="relative input-container flex items-center flex-col md:flex-row gap-4 md:gap-0">
          <div className="city-input-container w-full md:w-6/12">
            <input
              id="ville"
              type="text"
              name="ville"
              placeholder="enter a city"
              onChange={handleCity}
              className="w-full no-underline bg-customblack border border-customgray md:h-20 p-4 text-center rounded-md md:rounded-none md:rounded-l-md caret-customblue duration-200 focus:outline-none focus:border-transparent focus:border-b-customblue !outline-none"
            autoComplete="off"
            value={cityInput}
            />
          </div>
          {window.innerWidth < 768 && 
          <div className="city-buttons-container absolute mt-10 md:mt-20 w-full px-10 backdrop-blur-sm ">
            {dropDown}
          </div>
        }
          <DateInput handleStartDate={handleStartDate} handleEndDate={handleEndDate} startDate={startDate} endDate={endDate} />
        </div>
        {window.innerWidth > 768 && 
          <div className="city-buttons-container absolute">
            {dropDown}
          </div>
        }

      </div>

    )
  
}

export default CityInput;

