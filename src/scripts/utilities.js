
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

let scrollYPos = 0
window.onscroll = function() {
  console.log(window.scrollY)
  if (window.scrollY > scrollYPos) {
    window.scrollY > 99 ? document.getElementById('text-infos').style.transform = 'translateY(calc((448px/3) - 100px + 2rem))' : null
    window.scrollY > 199 ? document.getElementById('text-infos').style.transform = 'translateY(calc(((448px/3) * 2) - 200px + 2rem))' : null
    window.scrollY > 250 ? document.getElementById('text-infos').style.transform = 'translateY(calc(448px - 250px + 2rem))' : null
    scrollYPos = window.scrollY
  } else {
    window.scrollY < 200 ? document.getElementById('text-infos').style.transform = 'translateY(calc(((448px/3) * 2) - 200px + 2rem))' : null
    window.scrollY < 100 ? document.getElementById('text-infos').style.transform = 'translateY(calc((448px/3) - 100px + 2rem))' : null
    window.scrollY < 50 ? document.getElementById('text-infos').style.transform = 'translateY(0)' : null
    scrollYPos = window.scrollY
  }
  // document.getElementById('text-infos').style.
}