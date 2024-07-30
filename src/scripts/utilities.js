async function fetchApi(coordinates, date, dataInput) {
    const formattedCoord = formatLocalisationUrl(coordinates)
    const formattedDate = formatDateUrl(date)
    const formattedData = formatDataUrl(dataInput)
    const formatedUrl = `https://archive-api.open-meteo.com/v1/archive?${formattedCoord}&${formattedDate}&${formattedData}`;
    const response = await fetch(formatedUrl);
    let data = await response.json();
    return data
    // climdexIndices = calculateIndices();
    // generateGraph(climdexIndices, "raw");
}

function formatLocalisationUrl(coordinatesArr) {
    let formattedLocUrl = `latitude=${coordinatesArr[0]}&longitude=${coordinatesArr[1]}`;
    return formattedLocUrl
}

function formatDataUrl(dataInput) {
    let formattedDataUrl = "";
    switch (dataInput) {
      case "rain":
        formattedDataUrl = "&daily=precipitation_sum";
        break;
      case "snow":
        formattedDataUrl = "&daily=snowfall_sum";
        break;
      case "wind":
        formattedDataUrl = "&daily=wind_speed_10m_max";
        break;
      case "temp":
        formattedDataUrl = "&daily=temperature_2m_mean";
        break;
    }
    return formattedDataUrl;
}


function formatDateUrl(startDate, endDate) {
    // yearsArray = [];
    // const firstYear = startDate.split("-")[0];
    // const lastYear = endDate.split("-")[0];
    // yearsArray.push(firstYear, lastYear);
    const formattedDateUrl = `start_date=${startDate}&end_date=${endDate}`;
    return formattedDateUrl;
  }


function validDate(date) {
    const validFormat = /^\d{4}-\d{2}-\d{2}$/
    if (validFormat.test(date)) {
        return true
    }
    return false
}