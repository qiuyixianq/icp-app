import React from 'react';
import { Pie } from 'react-chartjs-2';

const backgroundColor = ['#8abaae', '#FF6961'];
const hoverBackgroundColor = ['#699187', '#bd534d'];



export const ProfitLoss = props => {
    const { cashInData, cashOutData } = props;

    const calProLossArr = () => {
        const totalSumIn = cashInData.length > 0 ? (cashInData.reduce((sum,curData) => ({amount: sum.amount + curData.amount}))) : {amount: 0};
        const totalSumOut = cashOutData.length > 0 ? (cashOutData.reduce((sum,curData) => ({amount: sum.amount + curData.amount}))) : {amount: 0};
        return [totalSumIn.amount,totalSumOut.amount];
    }

    const prolossData = {
        labels: ['Profit', 'Loss'],
        datasets: [{
            label: 'Profit/Loss',
            backgroundColor,
            hoverBackgroundColor,
            data: calProLossArr()
        }]
    }

    return (
        <div className="mt-5">
            <h3 className="font-bold text-xl">Profit vs Loss</h3>

            <div className="h-64 w-64 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
                {cashInData.length > 0 || cashOutData.length > 0 ? (
                    <Pie
                    data={prolossData}
                    options={{
                        title: {
                            display: true,
                            text: 'Profit.vs.Loss',
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

            <h3 className="font-bold mt-2 text-2xl">Profit: <span>{calProLossArr().reduce((p,c) => p - c)}</span> MYR</h3>
        </div>
    )
}