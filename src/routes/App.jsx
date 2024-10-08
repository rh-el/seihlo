import React, { useState, useCallback, createContext, useContext } from "react";
import DataInput from "../components/DataInput";
import CityInput from "../components/CityInput";
import SubmitButton from "../components/SubmitButton";
import Graph from '../components/Graph';
import IndiceChoice from "../components/IndiceChoice";
import TextInfos from "../components/TextInfos";
import {formatLocalisationUrl, formatDateUrl} from '../scripts/utilities';
import {calculateIndices} from '../scripts/indices';

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
      setStartDate(e.target.value)
    },
    [startDate]
  );

  const handleEndDate = useCallback(
    (e) => {
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


  const handleFetch = async (dataInput, coordinates, startDate, endDate) => {
    if (startDate >= 1940 && endDate < 2024) {
      setLoader(true)
      const formattedDate = formatDateUrl(startDate + '-01-01', endDate + '-12-31');
      const formattedUrl = `https://archive-api.open-meteo.com/v1/archive?${coordinates}&${formattedDate}&daily=precipitation_sum&daily=apparent_temperature_max`;
      const data = await (await fetch(formattedUrl)).json();
      setLoader(false)
      setRawData(data);
      const climdexIndices = calculateIndices(data);
      setIndicesResults(climdexIndices);
    } else {
      alert('please enter date between 1940 and 2023')
    }
  };

  const width = window.innerWidth > 1024 ? true : false

  return (
    <>
      <IndicesDataContext.Provider value={{ rawData, indicesResults }}>

        <div className='flex flex-col gap-8 min-h-svh justify-center md:p-8 xl:w-9/12'>
              <h1 className='text-9xl'>seihlo</h1>
              <div className='md:w-1/2 w-full text-lg'>
              <p>seihlo provides users with access to climate data from 1940 to the present.</p>
              <p>the application calculates several <a href="https://www.climdex.org/learn/indices/" target='_blank' className='bg-customblue text-customblack '>climdex indices</a> from daily raw data provided by the open-meteo api, offering detailed insights of climate variability and change from users city and time period inputs.</p>
              </div>
              <a href="#graph-section"><button className='border py-2 px-4 rounded-md flex items-center text-lg bg-customblue text-customblack duration-100 hover:bg-customblack hover:text-customblue'>
                      go to app
              </button></a>
          </div>

          <div id="graph-section" className={rawData ? "flex flex-col lg:flex-row md:w-11/12 w-full md:p-4 gap-4 min-h-svh items-center " : "flex justify-center w-full xl:w-9/12 xl:p-0 md:p-2 gap-4 min-h-svh items-center"} >
              {rawData && (
              <div id='indice-container' className="hidden lg:flex text-center w-full lg:w-4/12 lg:min-h-72 lg:top-[100px] lg:sticky lg:flex-col lg:justify-center" style={indiceChoiceStyle}>
                  <IndiceChoice handleIndiceSelection={handleIndiceSelection} dataInput={dataInput} />
              </div>
              )}
              <div className={rawData ? "xl:w-full lg:w-8/12 w-full flex flex-col gap-4 md:px-10" : "xl:w-full lg:w-8/12 w-full flex flex-col gap-4 md:px-10"} >
                <DataInput handleDataInput={handleDataInput} />
                  {rawData && (
                    <>
                      <div id='indice-container' className="flex lg:hidden text-center w-full h-20 " style={indiceChoiceStyle}>
                        <IndiceChoice handleIndiceSelection={handleIndiceSelection} dataInput={dataInput} />
                      </div>
                    </>
                  )}

              {!loader && (
              <Graph dataInput={dataInput} indiceSelection={indiceSelection} indicesResults={indicesResults} rawData={rawData} />
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
              <div id='text-infos' className="lg:flex hidden flex-col w-4/12 border border-gray-800 rounded-md p-2 text-customblue/70 h-fit justify-center" style={indiceChoiceStyle}>
                <TextInfos 
                coordinates={coordinates}
                selectedCity={selectedCity}
                startDate={startDate}
                endDate={endDate}
                dataInput={dataInput}
                indiceSelection={indiceSelection}
                />
              </div>
            )}
          </div>

        {loader && (
          <div className="absolute w-11/12 mt-[100svh] h-screen flex justify-center items-center backdrop-blur-lg ">loading ........</div>

        )}

      </IndicesDataContext.Provider>

      
     </>

  );
}

const indiceChoiceStyle = {
  transitionDuration: '0.5s',
  transitionTimingFunction: 'cubic-bezier(0.39, 0.575, 0.565, 1)'    
}

export default App;
