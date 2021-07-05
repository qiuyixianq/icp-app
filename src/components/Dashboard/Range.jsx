/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const rangeList = ['This Month', 'Last Month', 'Last Three Month'];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

//main render
export const Range = prop => {
    const { range: selected, onRangeChange } = prop;


    return (
        <div className="w-1/6">
            <Listbox value={selected} onChange={onRangeChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">Range</Listbox.Label>
                        <div className="mt-1 relative">
                            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selected}</span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    static
                                    className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                    {rangeList.map((rangeInMap,index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={rangeInMap}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')} >
                                                            {rangeInMap}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    )
}
