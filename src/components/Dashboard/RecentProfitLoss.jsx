import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

//data setup
const currentMonth = new Date().getMonth();
const calRecentMonth = diff => {
    const date = new Date();
    date.setMonth(currentMonth - diff);
    return date.toLocaleString('default', { month: 'long' });
}
const recentMonths = [calRecentMonth(2), calRecentMonth(1), calRecentMonth(0)];


export const RecentProfitLoss = () => {
    const { cashInData, cashOutData } = useSelector(state => state.cashInOut);
    
    const calProLossArr = () => {
        let diffArr = [];
        for(let i = currentMonth -2; i <= currentMonth; i++){
            //cashIn; 
            //get filtered array by month
            const sumInArr = cashInData.filter(data => new Date(data.date).getMonth() === i);
            //sum up all OBJECT.amount in array
            const totalSumIn = sumInArr.reduce((sum,curData) => ({amount: sum.amount + curData.amount}));

            //cashOut
            const sumOutArr = cashOutData.filter(data => new Date(data.date).getMonth() === i);
            const totalSumOut = sumOutArr.reduce((sum,curData) => ({amount: sum.amount + curData.amount}));

            diffArr.push(totalSumIn.amount - totalSumOut.amount);
        }
        return diffArr;
    }

    //line chart config
    const lineState = {
        labels: recentMonths,
        datasets: [
            {
                label: 'Profit vs Loss',
                fill: true,
                lineTension: 0.5,
                backgroundColor: '#C4B5FD',
                borderColor: '#1F2937',
                borderWidth: 3,
                data: calProLossArr()
            }
        ]
    }
    //main render
    return (
        <div className="mt-5">
            <h3 className="text-xl font-bold">Recent <span className="text-green-600 font-bold">Profit</span> vs <span className="text-red-500 font-bold">Loss</span></h3>
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