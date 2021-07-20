import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBalance } from '../../app/balanceSlice';


export const Balance = () => {
    const dispatch = useDispatch();
    const { balance } = useSelector(state => state);
    const [isEdit, setIsEdit] = useState(false);
    const updateRef = useRef(null);

    //event func
    //on balance updated
    const handleUpdate = () => {
        const updateValue = +updateRef.current.value;
        if (updateValue) {
            dispatch(setBalance(updateValue));
            setIsEdit(false);
        }else alert('Invalid Amount');
    }

    //render balance amount
    const renderBalance = () => {
        if (!isEdit) {
            return <h3 className="font-bold text-3xl">{balance}<span> MYR</span></h3>
        }
        else return (
            <div className="flex flex-wrap justify-between md:flex-row bg-gray-500 p-1 rounded-lg">
                <input type="number" ref={updateRef} className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter balance" />
                <button
                    className="w-full m-1 p-2 text-sm bg-gray-800 text-white rounded-lg font-semibold uppercase lg:w-auto"
                    onClick={() => handleUpdate()}>
                    update
                </button>
            </div>
        )
    }

    //main render
    return (
        <div className="mt-5">
            <div>
                <h3 className="font-bold text-xl inline-block align-middle">Current Balance</h3>
                <button className="inline-block ml-2 align-middle" onClick={() => setIsEdit(!isEdit)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>


            <div className="flex items-center justify-center h-72 w-72 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
                {renderBalance()}
            </div>
        </div>
    )
}