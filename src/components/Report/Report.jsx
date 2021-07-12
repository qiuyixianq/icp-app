import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const Report = () => {
    const [reportType, setReportType] = useState('cashin');
    const { cashInData, cashOutData } = useSelector(state => state);
    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);
    const [filteredData, setFilteredData] = useState(reportType === 'cashin' ? cashInData : cashOutData);

    //reset data when type switch 
    useEffect(() => {
        setFilteredData(reportType === 'cashin' ? cashInData : cashOutData);
        fromDateRef.current.value = toDateRef.current.value = "";
    }, [reportType, cashInData, cashOutData]);

    //filter event
    const filterData = () => {
        const fromValueString = fromDateRef.current.value;
        const toValueString = toDateRef.current.value;

        if (!fromValueString || !toValueString) alert('Empty Date Input');
        else {
            const fromValue = new Date(fromValueString);
            const toValue = new Date(toValueString);
            if (fromValue > toValue) alert('Invalid Date');
            else {
                let rangedData = (reportType === 'cashin' ? cashInData : cashOutData);
                rangedData = rangedData.filter(data => fromValue <= new Date(data.date) && new Date(data.date) <= toValue);
                setFilteredData(rangedData);
            }
        }
    }

    //reset event
    const resetData = () => {
        setFilteredData(reportType === 'cashin' ? cashInData:cashOutData);
        fromDateRef.current.value = toDateRef.current.value = "";
    }

    //render reportType radio button
    const renderTypeButton = () => {
        return (
            <div className="p-2 bg-gray-200 rounded-md">
                <div className="bg-gray-200 rounded-lg">
                    <div className="inline-flex rounded-lg">
                        <input onClick={() => setReportType('cashin')} type="radio" name="transaction_type" id="cashin" hidden />
                        <label
                            htmlFor="cashin"
                            className={`${reportType === 'cashin' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-300'} text-center self-center py-2 px-4 rounded-lg cursor-pointer `}
                        >
                            Cash In
                        </label>
                    </div>
                    <div className="inline-flex rounded-lg">
                        <input onClick={() => setReportType('cashout')} type="radio" name="transaction_type" id="cashout" hidden />
                        <label
                            htmlFor="cashout"
                            className={`${reportType === 'cashout' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-300'} text-center self-center py-2 px-4 rounded-lg cursor-pointer `}
                        >
                            Cash Out
                        </label>
                    </div>
                </div>
            </div>

        )
    }

    //render from-to range input
    const renderRangeInput = () => {
        return (
            <div className="ml-10 bg-gray-200 p-2 rounded-md">
                <label htmlFor="fromDate" className="mr-3 font-bold">From:</label>
                <input type="date" id="fromDate" ref={fromDateRef} />

                <label htmlFor="toDate" className="ml-10 mr-3 font-bold">To:</label>
                <input type="date" id="toDate" ref={toDateRef} />

                <button
                    onClick={() => filterData()}
                    className="py-2 px-4 ml-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-md"
                >
                    Search
                </button>
                <button
                    onClick={() => resetData()}
                    className="py-2 px-4 ml-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-md"
                >
                    Reset
                </button>
            </div>
        )
    }

    //render Data
    const renderTransactions = () => {
        if (filteredData.length === 0) {
            return (
                <tr>
                    <td className="text-white">No Transaction Found</td>
                </tr>
            );
        } else {
            return (
                filteredData.map((transaction, index) => (
                    <tr key={index} >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div>
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span className="relative font-bold">
                                        {transaction.category}
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {transaction.reference}
                            </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {transaction.detail}
                            </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className={`${reportType === 'cashin' ? 'text-green-900' : 'text-red-900'} relative inline-block px-3 py-1 font-semibold leading-tight`}>
                                <span aria-hidden="true" className={`${reportType === 'cashin' ? 'bg-green-200' : 'bg-red-500'} absolute inset-0 opacity-50 rounded-full`}>
                                </span>
                                <span className="relative">
                                    {transaction.amount}
                                </span>
                            </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {transaction.date}
                            </p>
                        </td>
                    </tr>
                ))
            )
        }

    }


    //main render
    return (
        <div className="bg-gray-800" >
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Report</h1>
                </div>
            </header>


            <div className="inline-flex justify-left ml-5 mt-5 items-center">
                {renderTypeButton()}
                {renderRangeInput()}
            </div>


            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-2">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-scroll h-screen">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                            Category
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                            Reference
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                            Detail
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                            Amount (MYR)
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold">
                                            Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {renderTransactions()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}