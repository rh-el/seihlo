import { useContext } from "react";
import { IndicesDataContext } from "../routes/App";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getMaxValue } from "../scripts/indices";
import { getMeanValue } from "../scripts/indices";
import { getMinValue } from "../scripts/indices";

function MeanGraph({ dataInput, indiceSelection, requestedData }) {
    const { rawData, indicesResults } = useContext(IndicesDataContext);

    const minValue = getMinValue(requestedData)
    const minIndex = requestedData.indexOf(minValue)
    const minYear = indicesResults.years[minIndex]

    const maxValue = getMaxValue(requestedData)
    const maxIndex = requestedData.indexOf(maxValue)
    const maxYear = indicesResults.years[maxIndex]

    const meanValue = getMeanValue(requestedData)

    const width = window.innerWidth > 640 ? true : false

    const data = width ? {
        labels: ['minimum record in ' + minYear, 'maximum record in ' + maxYear, 'average'],
        datasets: [{
            label: "value",
            data: [minValue, maxValue, meanValue],
            borderColor: "#E0FFFF",
            borderWidth: 2,
            hoverBackgroundColor: "#E0FFFF",
            hoverBorderColor: 'bg-customblack'
        }],
    } : {
        labels: [minYear, maxYear, 'average'],
        datasets: [{
            label: "value",
            data: [minValue, maxValue, meanValue],
            borderColor: "#E0FFFF",
            borderWidth: 2,
            hoverBackgroundColor: "#E0FFFF",
            hoverBorderColor: 'bg-customblack'
        }],
    }

    let size = window.innerWidth > 768 ? 18 : 14

    return (

            <Bar data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'extreme and average values of the selected indice',
                        color: '#E0FFFF',
                        font: {
                            family: "RX100",
                            weight: 'normal',
                            size: size
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

    )
    
}

export default MeanGraph;