import { useContext } from "react";
import { IndicesDataContext } from "../App";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import IndiceChoice from "./IndiceChoice";
import TextInfos from "./TextInfos";

function Graph({ dataInput, indiceSelection }) {
    const { rawData, indicesResults } = useContext(IndicesDataContext);
    let data, requestedData, indicesInfos;

    switch (indiceSelection) {
        case 'raw':
            indicesInfos='daily raw data'
            break;
        case 'tmm':
            indicesInfos='yearly average temperature'
            break;
        case 'txge30':
            indicesInfos='yearly count of days with temperature exceeding 30°C'
            break;
        case 'txgt50p':
            indicesInfos='yearly percentage of days above average temperature'
            break;  
        case 'etr':
            indicesInfos='yearly temperature range'
            break;
        case 'txx':
            indicesInfos='yearly maximum temperature'
            break;
        case 'r10mm':
            indicesInfos='yearly count of days with precipitation exceeding 10mm'
            break;
    }
    console.log(indicesInfos)

    if (rawData && indiceSelection === 'raw') {
        switch (dataInput) {
            case 'snow':
                requestedData = rawData.daily.snowfall_sum
                break;
            case 'rain':
                requestedData = rawData.daily.precipitation_sum
                break;
            case 'wind':
                requestedData = rawData.daily.wind_speed_10m_max
                break;
            case 'temp':
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

        return (
            <div className="graphContainer w-full shrink-0">
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text:indicesInfos
                            },
                            legend: {
                                display: false
                            }
                        }
                    }} />
            </div>
        )
    }

    if (rawData && indiceSelection !== 'raw') {
        switch (indiceSelection) {
            case 'tmm':
                requestedData = indicesResults.TMm
                break;
            case 'txge30':
                requestedData = indicesResults.TXge30
                break;
            case 'txgt50p':
                requestedData = indicesResults.TXgt50p
                break;
            case 'etr':
                requestedData = indicesResults.ETR
                break;
            case 'txx':
                requestedData = indicesResults.TXx
                break;
            case 'r10mm':
                requestedData = indicesResults.R10mm
                break;
        }

        data = {
            labels: indicesResults.years,
            datasets: [{
                label: "smthg",
                data: requestedData,
                borderColor: "#E0FFFF",
                radius: 4,
                borderWidth: 2,
            }],
        }
        return (
            <div className="graphContainer w-full shrink-0">
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: indicesInfos
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