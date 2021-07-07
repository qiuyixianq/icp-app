import React, { useState } from 'react';
import { Range } from './Range';
import { PieChartOut } from './PieChartOut';
import { PieChartIn } from './PieChartIn';
import { ProfitLoss } from './ProfitLoss';
import { LineChart } from './LineChart';

const rangeList = ['This Month', 'Last Month', 'Last Three Month'];


export const Dashboard = () => {
    const [range, setRange] = useState(rangeList[0]);    
    
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


                            <div className="flex mt-10 items-center">
                                <PieChartOut rangeList={rangeList} currentRange={range} />
                                <PieChartIn rangeList={rangeList} currentRange={range} />
                                <ProfitLoss />
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}