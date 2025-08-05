import React from 'react';
import { ChevronDownIcon, BellIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const ExploreNav = () => {
    return (
        <div className="p-6 border-b shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-12">
                <h1 className='text-[#1D1D1D] font-bold text-[25px]'>Logo</h1>
                <div className="flex items-center gap-3">
                    <div className="border border-[1.5px] w-[180px] h-[40px] p-3 flex justify-between items-center">
                        <p className="text-gray-500">Browse</p>
                        <ChevronDownIcon className='w-5 h-5 text-gray-500' />
                    </div>
                    <div className="border border-[1.5px] w-[300px] h-[40px] p-3 flex items-center gap-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                        <input type="text" placeholder="What do you want to learn..." className="text-gray-500 text-[14px] w-full outline-0"></input>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center gap-6">
                    <div className="flex items-center gap-3">
                        <BellIcon className='w-6 h-6 text-gray-600 cursor-pointer icon-hover' />
                        <HeartIcon className='w-6 h-6 text-gray-600 cursor-pointer icon-hover' />
                        <ShoppingCartIcon className='w-6 h-6 text-gray-600 cursor-pointer icon-hover' />
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="submit" className="w-[150px] bg-gray-400 text-black font-medium py-2 rounded-md hover:text-white button-hover transition duration-200">Create Account</button>
                        <button type="submit" className=" w-[100px] bg-black text-white font-medium py-2 rounded-md button-hover transition duration-200">Sign In</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default ExploreNav;