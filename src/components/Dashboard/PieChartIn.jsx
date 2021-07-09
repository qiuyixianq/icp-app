import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalEarn } from './dashboardSlice';


const backgroundColor = ['#006a4e', '#797df6', '#8abaae', '#4adede', '#1aa6ec', '#1e2e97'];
const hoverBackgroundColor = ['#00523c', '#5659c7', '#699187', '#3ca3a3', '#147eb3', '#121c5e'];

export const PieChartIn = props => {
    const { cashInCategory } = useSelector(state => state.category);
    const { cashInData } = useSelector(state => state);
    const { rangeList, currentRange } = props;
    const dispatch = useDispatch();

    //filter data
    const filterData = () => {
        let data = [];
        let rangedCategory = [];
        let rangedCashInData;

        switch (currentRange) {
            //This Month
            case rangeList[0]: rangedCashInData = cashInData.filter(el => new Date(el.date).getMonth() === new Date().getMonth()); break;
            //Last Month
            case rangeList[1]: rangedCashInData = cashInData.filter(el => new Date(el.date).getMonth() === new Date().getMonth() - 1); break;
            //Last Three Month
            case rangeList[2]: rangedCashInData = cashInData.filter(el => new Date(el.date).getMonth() >= new Date().getMonth() - 3); break;

            default: ;
        }

        if (rangedCashInData.length > 0) {
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
            //dispatch the data to top lv
            const totalEarn = data.reduce((p, c) => p + c);
            dispatch(setTotalEarn(totalEarn));
            return { data, rangedCategory };
        }
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

            <h3 className="font-bold mt-2 text-2xl">Total: <span>{cleanData.data.reduce((p, c) => p + c)}</span> MYR</h3>
        </div>
    );


}