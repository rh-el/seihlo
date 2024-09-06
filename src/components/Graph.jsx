import { useContext } from "react";
import { IndicesDataContext } from "../routes/App";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import MeanGraph from "./MeanGraph";

function Graph({ dataInput, indiceSelection }) {
    const { rawData, indicesResults } = useContext(IndicesDataContext);
    
    let data, requestedData;
    const indicesInfos = indiceText(indiceSelection)

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
            <div className="flex flex-col gap-8 md:w-full w-10/12 items-center justify-center m-auto">
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