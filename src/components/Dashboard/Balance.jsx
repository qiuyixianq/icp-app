import React from 'react';
import { useSelector } from 'react-redux';



export const Balance = () => {
    const { balance } = useSelector(state => state);


    //main render
    return (
        <div className="mt-5">
            <h3 className="font-bold text-xl">Current Balance</h3>


            <div className="flex items-center justify-center h-72 w-72 shadow-sm rounded-xl hover:shadow-lg transition-shadow ">
                 <h3 className="font-bold text-3xl">{balance}<span> MYR</span></h3>
            </div>
        </div>
    )
}