import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { cashOutData } from '../CashOut/cashOutDataEg';


const backgroundColor = ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'];
const hoverBackgroundColor = ['#501800', '#4B5000', '#175000', '#003350', '#35014F'];

export const PieChart = () => {
    const { cashOutCategory } = useSelector(state => state.category);

    //filter data
    const filterData = () => {
        let data = [];
        
        for(let i = 0; i < cashOutCategory.length; i++ ){
            let groupData = cashOutData.filter(el => el.category === cashOutCategory[i]);
            let amountSum = 0;
            for(let j = 0; j < groupData.length; j++){
                amountSum += groupData[j].amount;
            }
            data.push(amountSum);
        }
        return data;
    }

    //pie data
    const pieState = {
        labels: cashOutCategory,
        datasets: [{
            label: 'Expenses',
            backgroundColor,
            hoverBackgroundColor,
            data: filterData()
        }]
    }

    //main render
    return (
        <div>
            <h3 className="font-bold">Expenses</h3>

            <div className="h-72 w-72 shadow-sm rounded-lg hover:shadow-lg transition-shadow ">
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
                        }
                    }}
                />
            </div>
        </div>
    );


}