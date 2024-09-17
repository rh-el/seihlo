export let yearsArray = []

export function formatLocalisationUrl(coordinatesArr) {
  let formattedLocUrl = `latitude=${coordinatesArr[0]}&longitude=${coordinatesArr[1]}`;
  return formattedLocUrl;
}


export function formatDateUrl(startDate, endDate) {
  yearsArray = [];
  const firstYear = startDate.split("-")[0];
  const lastYear = endDate.split("-")[0];
  yearsArray.push(firstYear, lastYear);
  const formattedDateUrl = `start_date=${startDate}&end_date=${endDate}`;
  return formattedDateUrl;
}


export function indiceText(str) {
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
