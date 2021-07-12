import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OutCategory } from './OutCategory';
import { addCashOut } from './cashOutSlice';
import { updateBalance } from '../../app/balanceSlice';
import { addCashOutCategory } from '../../app/categorySlice';


export const CashOut = () => {
    const { cashOutCategory } = useSelector(state => state.category);
    const [selectedCategory, setSelectedCategory] = useState(cashOutCategory[0]);
    const dispatch = useDispatch();
    const referenceRef = useRef(null);
    const detailRef = useRef(null);
    const amountRef = useRef(null);
    const alertRef = useRef(null);
    const successRef = useRef(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    //show alert effect
    useEffect(() => {
        let hideTimeOut;
        const show = () => {
            hideTimeOut = setTimeout(() => {
                alertRef.current.style.display = 'none';
                setShowAlert(false);
            }, 3000);
        }

        if (showAlert) {
            alertRef.current.style.display = 'flex';
            show();
        }

        return () => clearTimeout(hideTimeOut);
    }, [showAlert]);

    //show success effect
    useEffect(() => {
        let hideTimeOut;
        const show = () => {
            hideTimeOut = setTimeout(() => {
                successRef.current.style.display = 'none';
                setShowSuccess(false);
            }, 3000);
        }

        if (showSuccess) {
            successRef.current.style.display = 'flex';
            show();
        }

        return () => clearTimeout(hideTimeOut);
    }, [showSuccess]);

    //handle new category
    const addNewCategory = () => {
        const categoryName = prompt('Insert Category Name:');
        dispatch(addCashOutCategory(categoryName));
    }

    //handle submit
    const saveRecord = () => {
        if (referenceRef.current.value && amountRef.current.value) {
            const newRecord = {
                category: selectedCategory,
                reference: referenceRef.current.value,
                detail: detailRef.current.value,
                amount: +amountRef.current.value,
                date: new Date().toDateString()
            }

            //clear input field
            referenceRef.current.value = detailRef.current.value = amountRef.current.value = '';

            dispatch(addCashOut(newRecord));
            dispatch(updateBalance(-newRecord.amount));
            setShowSuccess(true);
        }

        else setShowAlert(true);
    }

    //render alert
    const renderAlert = () => {
        return (
            <div className="hidden w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 fixed right-5 bottom-5 "
                ref={alertRef}
            >
                <div className="flex items-center justify-center w-12 bg-red-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                    <div className="mx-3">
                        <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                        <p className="text-sm text-gray-600 dark:text-gray-200">Required input is empty</p>
                    </div>
                </div>
            </div>
        )
    }

    //render success
    const renderSuccess = () => {
        return (

            <div className="hidden w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 fixed right-5 bottom-5 "
                ref={successRef}
            >
                <div className="flex items-center justify-center w-12 bg-green-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                    </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                    <div className="mx-3">
                        <span className="font-semibold text-green-500 dark:text-green-400">Success</span>
                        <p className="text-sm text-gray-600 dark:text-gray-200">New record has been saved!</p>
                    </div>
                </div>
            </div>
        )
    }



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
                        ref={amountRef}
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
        <div className="dark">
            {renderAlert()}
            {renderSuccess()}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Cash Out</h1>
                </div>
            </header>


            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <button
                            onClick={() => addNewCategory()}
                            className="bg-gray-600 hover:bg-gray-700 text-white p-1 rounded-md"
                        >
                            Add New Category
                        </button>
                        <div className="border-2 border-gray-300 rounded-lg flex" >


                            <div className="flex w-full h-full space-x-3">
                                <div className="w-full px-5 py-10 mx-auto bg-white rounded-lg shadow dark:bg-gray-800">


                                    <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                        Cash-out Record
                                    </div>


                                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">

                                        <div className="col-span-2 lg:col-span-1">
                                            <OutCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                                        </div>


                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <input
                                                    type="text"
                                                    id="contact-form-email"
                                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    placeholder="Reference"
                                                    ref={referenceRef}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-gray-700" htmlFor="name">
                                                <textarea
                                                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    id="comment"
                                                    placeholder="Detail" name="detail" rows="5" cols="40"
                                                    ref={detailRef}
                                                >
                                                </textarea>
                                            </label>
                                        </div>
                                        <div className="col-span-2">
                                            {renderCashInput()}
                                        </div>


                                        <div className="col-span-2 text-right">
                                            <button
                                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                onClick={() => saveRecord()}>
                                                Save
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </main>


        </div>
    )
}