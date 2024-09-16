function formatLocalisationUrl(coordinatesArr) {
  let formattedLocUrl = `latitude=${coordinatesArr[0]}&longitude=${coordinatesArr[1]}`;
  return formattedLocUrl;
}

function formatDataUrl(dataInput) {
  let formattedDataUrl = "";
  switch (dataInput) {
    case "rain":
      formattedDataUrl = "daily=precipitation_sum";
      break;
    case "snow":
      formattedDataUrl = "daily=snowfall_sum";
      break;
    case "wind":
      formattedDataUrl = "daily=wind_speed_10m_max";
      break;
    case "temp":
      formattedDataUrl = "daily=wind_speed_10m_max";
      break;
  }
  return formattedDataUrl;
}

function formatDateUrl(startDate, endDate) {
  yearsArray = [];
  const firstYear = startDate.split("-")[0];
  const lastYear = endDate.split("-")[0];
  yearsArray.push(firstYear, lastYear);
  const formattedDateUrl = `start_date=${startDate}&end_date=${endDate}`;
  return formattedDateUrl;
}

function validDate(date) {
  const validFormat = /^\d{4}-\d{2}-\d{2}$/;
  if (validFormat.test(date)) {
    return true;
  }
  return false;
}

function indiceText(str) {
  switch (str) {
    case 'raw':
        return 'daily raw data'
    case 'tmm':
        return 'yearly average temperature'
    case 'txge30':
        return 'yearly count of days with temperature exceeding 30°C'
    case 'txgt50p':
        return 'yearly percentage of days above average temperature' 
    case 'etr':
        return 'yearly temperature range'
    case 'txx':
        return 'yearly maximum temperature'
    case 'r10mm':
        return 'yearly count of days with precipitation exceeding 10mm'
}
}

// window.onscroll = function() {
//   makeDivFloat()
// }

// function makeDivFloat() {
//   const maxHeight = document.body.scrollHeight + 1000
//   const movementFactor = 500
//   let yPos = ((window.scrollY * movementFactor) / maxHeight)
//   document.getElementById('text-infos').style.transform = `translateY(${yPos}px)`
//   document.getElementById('indice-container').style.transform = `translateY(${yPos}px)`
// }