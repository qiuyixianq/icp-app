import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { filterData } from './filterData';


const backgroundColor = ['#006a4e', '#797df6', '#8abaae', '#4adede', '#1aa6ec', '#1e2e97'];
const hoverBackgroundColor = ['#00523c', '#5659c7', '#699187', '#3ca3a3', '#147eb3', '#121c5e'];

export const PieChartIn = props => {
    const { cashInCategory } = useSelector(state => state.category);
    const { cashData: rangedCashInData } = props;
    const cleanData = filterData(rangedCashInData,cashInCategory);
    //pie data
    const pieState = {
        labels: cleanData.rangedCategory,
        datasets: [{
            label: 'Gross Profit',
            backgroundColor,
            hoverBackgroundColor,
            data: cleanData.data
        }]
    }

    const renderTotal = () => {
        if(cleanData.data.length > 0) return <h3 className="font-bold mt-2 text-2xl">Total: <span>{cleanData.data.reduce((p, c) => p + c)}</span> MYR</h3>
    }

    //main render
    return (
        <div className="mt-5">
            <h3 className="font-bold text-xl">Gross Profit</h3>

            <div className="h-72 w-72 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
                {cleanData.rangedCategory.length > 0 ? (
                    <Doughnut
                    data={pieState}
                    options={{
                        title: {
                            display: true,
                            text: 'Gross Profit',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        hoverOffset: 6
                    }}
                />
                ): (<h3 className="font-bold mt-2 text-md">No Record</h3>)}
            </div>

            {renderTotal()}
        </div>
    );


}