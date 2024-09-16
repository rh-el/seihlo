import {yearsArray} from './utilities'

// create an object for a specific year
// {day: data}
function makeYearlyObject(data, year, dataType) {
  let typeOfData =
    dataType === "temp" ? "apparent_temperature_max" : "precipitation_sum";
  const newObject = {};
  for (let i = 0; i < data.daily.time.length; i++) {
    if (data.daily.time[i].includes(year)) {
      newObject[data.daily.time[i]] = data.daily[typeOfData][i];
    }
  }
  return newObject;
}

// calculate TMm
// yearly average temperature
function calculateTMm(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "temp");
  const yearlyDataArr = Object.values(yearlyDataObject);
  let yearlyMeanTemp =
    yearlyDataArr.reduce((count, element) => count + element) /
    yearlyDataArr.length;
  return yearlyMeanTemp;
}

// calculate TXge30
// number of days when temperature >= 30
function calculateTXge30(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "temp");
  const yearlyDataArr = Object.values(yearlyDataObject);
  const TXge30Arr = yearlyDataArr.filter((temp) => temp >= 30);
  return TXge30Arr.length;
}

// calculate TXgt50p
// percentage of days above average temperature
// calculate average temperature of the year
// count number of days above the average temp
function calculateTXgt50p(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "temp");
  const yearlyDataArr = Object.values(yearlyDataObject);
  const yearlyMeanTemp = calculateTMm(year, data);
  const TXgt50pArr = yearlyDataArr.filter((temp) => temp >= yearlyMeanTemp);
  const TXgt50p = (TXgt50pArr.length / yearlyDataArr.length) * 100;
  return TXgt50p;
}

// calculate ETR
// extreme temperature range
// yearly range of temperature
function calculateETR(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "temp");
  const yearlyDataArr = Object.values(yearlyDataObject);
  const minTemp = Math.min(...yearlyDataArr);
  const maxTemp = Math.max(...yearlyDataArr);
  return maxTemp - minTemp;
}

// calculate TXx
// max temperature
function calculateTXx(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "temp");
  const yearlyDataArr = Object.values(yearlyDataObject);
  const maxTemp = Math.max(...yearlyDataArr);
  return maxTemp;
}

// calculate R10mm
// count of days with precipitation >= 10mm
function calculateR10mm(year, data) {
  const yearlyDataObject = makeYearlyObject(data, year, "rain");
  const yearlyDataArr = Object.values(yearlyDataObject);
  const r10mm = yearlyDataArr.filter((element) => element > 10).length;
  return r10mm;
}

export function calculateIndices(data) {
  const yearlyIndices = {
    years: [],
    TMm: [],
    TXge30: [],
    TXgt50p: [],
    ETR: [],
    TXx: [],
    R10mm: [],
  };
  for (let i = yearsArray[0]; i <= yearsArray[1]; i++) {
    yearlyIndices.years.push(i);
    yearlyIndices.TMm.push(calculateTMm(i, data));
    yearlyIndices.TXge30.push(calculateTXge30(i, data));
    yearlyIndices.TXgt50p.push(calculateTXgt50p(i, data));
    yearlyIndices.ETR.push(calculateETR(i, data));
    yearlyIndices.TXx.push(calculateTXx(i, data));
    yearlyIndices.R10mm.push(calculateR10mm(i, data));
  }
  return yearlyIndices;
}


export function convertRange(value, r1, r2) {
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

export function getMaxValue(arr) {
  return Math.max(...arr)
}

export function getMinValue(arr) {
  return Math.min(...arr)
}

export function getMeanValue(arr) {
  let meanValue = arr.reduce((count, element) => count + element) /
  arr.length;
  return meanValue;
}
