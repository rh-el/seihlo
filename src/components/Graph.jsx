import { useContext } from "react";
import { IndicesDataContext } from "../routes/App";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import MeanGraph from "./MeanGraph";

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

    // if (rawData && indiceSelection === 'raw') {
    //     switch (dataInput) {
    //         case 'snow':
    //             requestedData = rawData.daily.snowfall_sum

    //             break;
    //         case 'rain':
    //             requestedData = rawData.daily.precipitation_sum

    //             break;
    //         case 'wind':
    //             requestedData = rawData.daily.wind_speed_10m_max

    //             break;
    //         case 'temp':
    //             requestedData = rawData.daily.apparent_temperature_max

    //             break;
    //     }

    //     // console.log('max: ' + getMaxValue(requestedData))
    //     // console.log('min: ' + getMinValue(requestedData))

    //     data = {
    //         labels: rawData.daily.time,
    //         datasets: [{
    //             label: "smthg",
    //             data: requestedData,
    //             borderColor: "#E0FFFF",
    //             radius: 0,
    //             borderWidth: 1,
    //         }],
    //     }

    //     return (
    //         <>
    //         <div className="graphContainer w-full relative ">
    //             <Line
    //                 data={data}
    //                 options={{
    //                     plugins: {
    //                         title: {
    //                             display: true,
    //                             text:indicesInfos
    //                         },
    //                         legend: {
    //                             display: false
    //                         }
    //                     }
    //                 }} />
    //         </div>
    //         <MeanGraph 
    //             dataInput={dataInput}
    //             indiceSelection={indiceSelection}
    //             requestedData={requestedData}
    //         />
    //         </>
    //     )
    // }

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
                label: 'value',
                data: requestedData,
                borderColor: "#E0FFFF",
                radius: function(context) {
                    const index = context.dataIndex;
                    const value = context.dataset.data[index];
                    return convertRange(value, [getMinValue(requestedData), getMaxValue(requestedData)], [4, 10]);
                },
                pointHoverRadius: 15,
                pointHoverBackgroundColor: '#E0FFFF',   
                borderWidth: 2,
                tension: 0.5,
                hoverBorderColor: 'bg-customblack'
            }],
        }
        return (
            <>
            <div className="flex flex-col gap-8">
            {/* <div className="graphContainer w-full "> */}
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
            {/* </div> */}
            <MeanGraph 
                dataInput={dataInput}
                indiceSelection={indiceSelection}
                requestedData={requestedData}
            />
            </div>
            </>
        )
    }
}

export default Graph;