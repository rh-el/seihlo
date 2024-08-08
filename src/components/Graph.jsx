import { useContext } from "react";
import { IndicesDataContext } from "../App";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Graph({ dataInput }) {
    const { rawData, indicesResults } = useContext(IndicesDataContext);
    // console.log(dataInput)
    let data, requestedData;


    if (rawData) {
        switch (dataInput) {
            case 'daily=snowfall_sum':
                requestedData = rawData.daily.snowfall_sum
                break;
            case 'daily=precipitation_sum':
                requestedData = rawData.daily.precipitation_sum
                break;
            case 'daily=wind_speed_10m_max':
                requestedData = rawData.daily.wind_speed_10m_max
                break;
            case 'daily=apparent_temperature_max':
                requestedData = rawData.daily.apparent_temperature_max
                break;
        }

        data = {
            labels: rawData.daily.time,
            datasets: [{
                label: "smthg",
                data: requestedData,
                borderColor: "#E0FFFF",
                radius: 0,
                borderWidth: 1,
            }],
        }
    }

    if (rawData) {
        return (
            <div className="graph-container">
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "sum text"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }} />
            </div>
        )
    }

}

export default Graph;



// let chart, type, xaxis, yaxis;
// function generateGraph(indices, radioChecked) {
//     graphContainer.style.display = "flex";
//     if (chart) {
//         chart.destroy();
//     }

//     switch (radioChecked) {
//         case "raw":
//             type = "line";
//             xaxis = data.daily.time;
//             if (dataRequested === "pluie") {
//                 yaxis = data.daily.precipitation_sum;
//             }
//             if (dataRequested === "temperature") {
//                 yaxis = data.daily.temperature_2m_mean;
//             }
//             if (dataRequested === "vent") {
//                 yaxis = data.daily.wind_speed_10m_max;
//             }
//             if (dataRequested === "neige") {
//                 yaxis = data.daily.snowfall_sum;
//             }
//             createLegend()
//             animateGraph();
//             break;
//         case "tmm":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.TMm;
//             indiceGraph();
//             break;
//         case "txge30":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.TXge30;
//             indiceGraph();
//             break;
//         case "txgt50p":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.TXgt50p;
//             indiceGraph();
//             break;
//         case "etr":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.ETR;
//             indiceGraph();
//             break;
//         case "txx":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.TXx;
//             indiceGraph();
//             break;
//         case "r10mm":
//             type = "line";
//             xaxis = indices.years;
//             yaxis = indices.R10mm;
//             indiceGraph();
//             break;
//     }
// }


function indiceGraph(xaxis, yaxis) {
    chart = new Chart(divContainer, {
        type: type,
        data: {
            labels: xaxis,
            datasets: [
                {
                    label: "smthg",
                    data: yaxis,
                    borderColor: "white ",
                    backgroundColor: "white",
                },
            ],
        },
    });
}