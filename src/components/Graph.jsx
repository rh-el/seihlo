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

        console.log('max: ' + getMaxValue(requestedData))
        console.log('min: ' + getMinValue(requestedData))

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
                label: "degrees",
                data: requestedData,
                borderColor: "#E0FFFF",
                radius: function(context) {
                    const index = context.dataIndex;
                    const value = context.dataset.data[index];
                    return convertRange(value, [getMinValue(requestedData), getMaxValue(requestedData)], [4, 10]);
                },
                pointHoverRadius: 10,
                pointHoverBackgroundColor: '#E0FFFF',   
                borderWidth: 2,
                tension: 0.5
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
                                text: indicesInfos,
                                color: '#E0FFFF',
                                font: {
                                    family: "RX100",
                                    weight: 'normal',
                                    size: 18
                                }
                            },
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: 'rgba(224, 252, 255)',
                                titleColor: 'black',
                                bodyColor: 'black',
                                titleFont: {
                                    family: "RX100",
                                    weight: 'normal',
                                    size: 14
                                },
                                bodyFont: {
                                    family: 'RX100',
                                    size: 14
                                },
                                caretSize: 0,
                                displayColors: false,
                                padding: 20,
                                position: 'average',
                                xAlign: 'left',
                                caretPadding: 15
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: 'rgba(224, 252, 255, 0.5)',
                                    font: {
                                        family: "RX100",
                                        weight: 'normal',
                                        size: 14
                                    }
                                }

                            },
                            x: {
                                ticks: {
                                    color: 'rgba(224, 252, 255, 0.5)',
                                    font: {
                                        family: "RX100",
                                        weight: 'normal',
                                        size: 14
                                    }
                                }

                            }
                        }
                    }} />
            </div>
        )
    }



}

export default Graph;



function convertRange(value, r1, r2) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

function getMaxValue(arr) {
    return Math.max(...arr)
}

function getMinValue(arr) {
    return Math.min(...arr)
}