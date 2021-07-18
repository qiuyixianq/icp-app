import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

//could be better by picking random colour according to num of data set 
const backgroundColor = ['#8464a0', '#0a407a', '#C9DE00', '#2086ec', '#00A6B4', '#6800B4', '#cea9bc'];
const hoverBackgroundColor = ['#532d75', '#082a4f', '#4B5000', '#145391', '#003350', '#35014F', '#99607e'];

export const PieChartOut = props => {
    const { cashOutCategory } = useSelector(state => state.category);
    const { cashData: rangedCashOutData } = props;

    //filter data
    const filterData = () => {
        let data = [];
        let rangedCategory = [];

        if (rangedCashOutData.length > 0) {
            //summing each cashOut category's amount
            for (let i = 0; i < cashOutCategory.length; i++) {
                let groupData = rangedCashOutData.filter(el => el.category === cashOutCategory[i]);

                if (groupData.length !== 0) {
                    rangedCategory.push(groupData[0].category);
                    const amountSum = groupData.reduce((sum,curData) => ({amount: sum.amount + curData.amount}));
                    data.push(amountSum.amount);
                }
            }
            return { data, rangedCategory };
        }
    }


    const cleanData = filterData();
    //pie data
    const pieState = {
        labels: cleanData.rangedCategory,
        datasets: [{
            label: 'Expenses',
            backgroundColor,
            hoverBackgroundColor,
            data: cleanData.data
        }]
    }

    //main render
    return (
        <div className="mt-5">
            <h3 className="font-bold text-xl">Expenses</h3>

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