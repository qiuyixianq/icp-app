import React, { useState } from 'react';
import { cashInData } from '../CashIn/cashInDataEg';
import { cashOutData } from '../CashOut/cashOutDataEg';

export const Report = () => {
    const [reportType, setReportType] = useState('cashin');

    //render reportType radio button
    const renderTypeButton = () => {
        return (
            <div className="inline-flex justify-left ml-5 mt-5 items-center">
                <div className="bg-gray-200 rounded-lg">
                    <div className="inline-flex rounded-lg">
                        <input onClick={() => setReportType('cashin')} type="radio" name="room_type" id="roomPrivate" checked hidden />
                        <label for="roomPrivate" className={`${reportType === 'cashin' ? 'bg-green-500' : 'hover:bg-gray-300'} text-center self-center py-2 px-4 rounded-lg cursor-pointer `}>Cash In</label>
                    </div>
                    <div className="inline-flex rounded-lg">
                        <input onClick={() => setReportType('cashout')} type="radio" name="room_type" id="roomPublic" hidden />
                        <label for="roomPublic" className={`${reportType === 'cashout' ? 'bg-green-500' : 'hover:bg-gray-300'} text-center self-center py-2 px-4 rounded-lg cursor-pointer `}>Cash Out</label>
                    </div>
                </div>
            </div>
        )
    }

    //render Data
    const renderTransactions = () => {
        const data = reportType === 'cashin' ? cashInData : cashOutData;

        return (
            data.map((transaction, index) => (
                <tr key={index} >
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div>
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                </span>
                                <span className="relative">
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
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
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

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Report</h1>
                </div>
            </header>
            {renderTypeButton()}

            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-2">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-scroll h-screen">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Category
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Reference
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Detail
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
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