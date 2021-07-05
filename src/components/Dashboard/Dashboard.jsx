import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Range } from './Range';


const rangeList = ['This Month', 'Last Month', 'Last Three Month'];

const pieState = {
    labels: ['January', 'February', 'March','April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [1, 2, 3, 4, 5]
        }
    ]
}

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


export const Dashboard = () => {
    const [selected, setSelected] = useState(rangeList[0]);

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main>
                <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-2 border-gray-300 rounded-lg p-3" >
                            <Range onRangeChange={setSelected} range={selected} />


                            <div className="flex mt-10 items-center">
                                <div className="h-72 w-72 ">
                                    <Doughnut
                                        data={pieState}
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

                                        }}
                                    />
                                </div>


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
                            </div>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    );
}