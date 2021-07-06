import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { cashInData } from '../CashIn/cashInDataEg';


const backgroundColor = ['#006a4e', '#797df6', '#8abaae', '#4adede', '#1aa6ec', '#1e2e97'];
const hoverBackgroundColor = ['#00523c', '#5659c7', '#699187', '#3ca3a3', '#147eb3', '#121c5e'];

export const PieChartIn = props => {
    const { cashInCategory } = useSelector(state => state.category);
    const { rangeList, currentRange } = props;
    console.log(cashInData);
    //filter data
    const filterData = () => {
        let data = [];
        let rangedCategory = [];
        let rangedCashInData;

        switch (currentRange) {
            //This Month
            case rangeList[0]: rangedCashInData = cashInData.filter(el => el.date.getMonth() === new Date().getMonth()); break;
            //Last Month
            case rangeList[1]: rangedCashInData = cashInData.filter(el => el.date.getMonth() === new Date().getMonth() - 1); break;
            //Last Three Month
            case rangeList[2]: rangedCashInData = cashInData.filter(el => el.date.getMonth() >= new Date().getMonth() - 3); break;

            default: console.log('this wont happen');
        }

        //summing each cashOut category's amount
        for (let i = 0; i < rangedCashInData.length; i++) {
            let groupData = rangedCashInData.filter(el => el.category === cashInCategory[i]);

            let amountSum = 0;
            if (groupData.length !== 0) {
                rangedCategory.push(groupData[0].category);
                for (let j = 0; j < groupData.length; j++) {
                    amountSum += groupData[j].amount;
                }
                data.push(amountSum);
            }
        }
        return { data, rangedCategory };
    }

    const cleanData = filterData();
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

    //main render
    return (
        <div>
            <h3 className="font-bold text-xl">Gross Profit</h3>

            <div className="h-72 w-72 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
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
                        hoverOffset: 6
                    }}
                />
            </div>

            <h3 className="font-bold mt-2 text-2xl">Total: {cleanData.data.reduce((p,c) => p + c)} MYR</h3>
        </div>
    );


}