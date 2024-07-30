import { useState, useEffect, useCallback  } from "react";
let timer = 0;
function CityInput(props) {
  const {handleCity, cityInput, cityData, handleCityData, handleCoordinates} = props

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
      <div className="city-input-container">
    <input
      id="ville"
      type="text"
      name="ville"
      placeholder="Enter a city"
      onChange={handleCity}
      // autocomplete="off"
    />
    <div className="city-buttons-container">
      {cityData.results.map((city,i) => 
        <div className="city-button" key={i}>
          <button id={i} key={i} onClick={cityButtonClickHandler}>{city.name}, {city.country}, {city.latitude}, {city.longitude}</button>
        </div>
      )}
    </div>
    
  </div>
    )
  } else {
    return (
      <div className="city-input-container">
    <input
      id="ville"
      type="text"
      name="ville"
      placeholder="Enter a city"
      onChange={handleCity}
      // autocomplete="off"
    />
    </div>
    )
  }
}

export default CityInput;

