import React from 'react';
import { Line } from 'react-chartjs-2';

const lineState = {
    labels: ['January', 'February', 'March','April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export const LineChart = () => {
    return (
        <div>
            <Line
                data={lineState}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}