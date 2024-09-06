import React, { useState, useCallback, createContext, useContext } from "react";
import DataInput from "../components/DataInput";
import CityInput from "../components/CityInput";
import SubmitButton from "../components/SubmitButton";
import Graph from '../components/Graph';
import IndiceChoice from "../components/IndiceChoice";
import TextInfos from "../components/TextInfos";

export const IndicesDataContext = createContext(null);

function App() {
  const [dataInput, setDataInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [cityData, setCityData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rawData, setRawData] = useState(null);
  const [indicesResults, setIndicesResults] = useState(null);
  const [indiceSelection, setIndiceSelection] = useState('raw');
  const [selectedCity, setSelectedCity] = useState('');
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
      console.log('handle city trig')
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

      setStartDate(e.target.value)
    },
    [startDate]
  );

  const handleEndDate = useCallback(
    (e) => {
      // validDate(e.target.value) ? setEndDate(e.target.value) : null;
      setEndDate(e.target.value)
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
    const formattedDate = formatDateUrl(startDate + '-01-01', endDate + '-12-31');
    const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&daily=precipitation_sum&daily=apparent_temperature_max`;
    const data = await (await fetch(formattedUrl)).json();
    setLoader(false)
    setRawData(data);
    const climdexIndices = calculateIndices(data);
    setIndicesResults(climdexIndices);
  };


  return (

    <>
      <IndicesDataContext.Provider value={{ rawData, indicesResults }}>
        <div className='flex flex-col gap-8 min-h-svh justify-center p-8'>
              <h1 className='text-9xl'>seihlo</h1>
              <div className='w-1/2 text-lg'>
              <p>seihlo provides users with access to climate data from 1940 to the present.</p>
              <p>the application calculates several <a href="https://www.climdex.org/learn/indices/" target='_blank' className='bg-customblue text-customblack '>climdex indices</a> from daily raw data provided by the open-meteo api, offering detailed insights of climate variability and change from users city and time period inputs.</p>
              </div>
              <a href="#graph-section"><button className='border py-2 px-4 rounded-md flex items-center text-lg bg-customblue text-customblack duration-100 hover:bg-customblack hover:text-customblue'>
                      go to app
              </button></a>
          </div>
          <div id="graph-section" className={rawData ? "flex w-11/12 gap-4 min-h-svh items-center pb-4 " : "flex w-1/2 gap-4 min-h-svh items-center"} >
            {rawData && (
              <IndiceChoice handleIndiceSelection={handleIndiceSelection} dataInput={dataInput} />
            )}
            <div className="w-10/12 flex flex-col gap-4" >
              <DataInput handleDataInput={handleDataInput} />
              {!loader && (
              <Graph dataInput={dataInput} indiceSelection={indiceSelection} />
              )}
              <CityInput
                handleCity={handleCity}
                cityInput={cityInput}
                setCityInput={setCityInput}
                handleCityData={handleCityData}
                cityData={cityData}
                handleCoordinates={handleCoordinates}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                handleCitySelection={handleCitySelection}
                selectedCity={selectedCity}
                startDate={startDate}
                endDate={endDate}
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

        {loader && (
          <div className="absolute w-11/12 mt-[100svh] h-svh flex justify-center items-center backdrop-blur-lg ">loading ........</div>
        )}

      </IndicesDataContext.Provider>
    </>
  );
}

export default App;
