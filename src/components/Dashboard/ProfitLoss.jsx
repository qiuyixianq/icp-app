import React from 'react';
import { Pie } from 'react-chartjs-2';

const backgroundColor = ['#8abaae', '#FF6961'];
const hoverBackgroundColor = ['#699187', '#bd534d'];

const prolossData = {
    labels: ['Profit', 'Loss'],
    datasets: [{
        label: 'Profit/Loss',
        backgroundColor,
        hoverBackgroundColor,
        data: [65, 59]
    }]
}

export const ProfitLoss = () => {

    return (
        <div>
            <h3 className="font-bold text-xl">Profit vs Loss</h3>

            <div className="h-64 w-64 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
                <Pie
                    data={prolossData}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        hoverOffset: 6
                    }}
                />
            </div>
        </div>
    )
}