import React, { useState } from 'react';
import { Range } from './Range';
import { PieChartOut } from './PieChartOut';
import { PieChartIn } from './PieChartIn';
import { ProfitLoss } from './ProfitLoss';
import { Balance } from './Balance';
import { RecentProfitLoss } from './RecentProfitLoss';
import { useSelector } from 'react-redux';

const rangeList = ['This Month', 'Last Month', 'Last Three Month'];


export const Dashboard = () => {
    const [range, setRange] = useState(rangeList[0]);
    const { cashInData, cashOutData } = useSelector(state => state.cashInOut);

    let rangedCashInData, rangedCashOutData = [];
    switch(range){
        //This Month
        case rangeList[0]: {
            rangedCashInData = cashInData.filter(data => new Date(data.date).getMonth() === new Date().getMonth());
            rangedCashOutData = cashOutData.filter(data => new Date(data.date).getMonth() === new Date().getMonth());
            break;
        }
        //Last Month
        case rangeList[1]: {
            rangedCashInData = cashInData.filter(el => new Date(el.date).getMonth() === new Date().getMonth() - 1);
            rangedCashOutData = cashOutData.filter(el => new Date(el.date).getMonth() === new Date().getMonth() - 1);
            break;
        }
        //Last Three Month
        case rangeList[2]: {
            rangedCashInData = cashInData.filter(el => new Date(el.date).getMonth() >= new Date().getMonth() - 3);
            rangedCashOutData = cashOutData.filter(el => new Date(el.date).getMonth() >= new Date().getMonth() - 3);
            break;
        }
        default: 
    }
    
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main>
                <div className=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-2 border-gray-300 bg-white rounded-lg p-3" >
                            <Range onRangeChange={setRange} range={range} />


                            <div className="flex flex-wrap mt-10 items-center">
                                <PieChartOut cashData={rangedCashOutData} />
                                <PieChartIn cashData={rangedCashInData} />
                                <ProfitLoss cashInData={rangedCashInData} cashOutData={rangedCashOutData} />
                                <Balance />
                                <RecentProfitLoss />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}