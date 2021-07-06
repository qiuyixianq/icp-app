import React from 'react';
import { InCategory } from './InCategory';

export const CashIn = () => {

    //render amountInput
    const renderCashInput = () => {
        return (
            <div>
                <label htmlFor="price" className="block text-md font-medium text-white">
                    Amount
                </label>
                <div className="mt-1 relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">$</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full pl-7 pr-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                            Currency
                        </label>
                        <select
                            id="currency"
                            name="currency"
                            className=" h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                        >
                            <option>MYR</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    //main render
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Cash In</h1>
                </div>
            </header>


            <main className="dark">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-2 border-gray-300 rounded-lg flex" >


                            <form className="flex w-full h-full space-x-3">
                                <div className="w-full px-5 py-10 mx-auto bg-white rounded-lg shadow dark:bg-gray-800">


                                    <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                        Cash-in Record
                                    </div>


                                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">

                                        <div className="col-span-2 lg:col-span-1">
                                            {/* <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Category" /> */}
                                            <InCategory />
                                        </div>


                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Reference" />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-gray-700" for="name">
                                                <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Detail" name="detail" rows="5" cols="40">
                                                </textarea>
                                            </label>
                                        </div>
                                        <div className="col-span-2">
                                            {renderCashInput()}
                                        </div>


                                        <div className="col-span-2 text-right">
                                            <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Save
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </main>


        </div>
    )
}