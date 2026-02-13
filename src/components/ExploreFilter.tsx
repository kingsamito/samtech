import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


const ExploreFilter = () => {
    return (
        <div className="main-container">
            <div className="lg:flex lg:justify-between">
                <div className="flex gap-5">
                    <div className="flex items-center gap-3 mb-6 border-[1.5px] border-[#FF6636] w-[150px] justify-center h-[40px]">
                        <h3 className="text-[#FF6636]">Filter</h3>
                        <h3 className="text-white bg-[#FF6636] w-[20px] flex justify-center">3</h3>
                    </div>
                    <div className="border border-[1.5px] w-[300px] h-[40px] p-3 flex items-center gap-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                        <input type="text" placeholder="UI/UX " className="text-gray-500 text-[14px] w-full outline-0"></input>
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 items-center">
                        <p className="text-[14px] text-gray-500">Sort by:</p>
                        <div className="border border-[1.5px] w-[180px] h-[40px] p-3 flex justify-between items-center">
                            <p className="text-gray-500">Trending</p>
                            <ChevronDownIcon className='w-5 h-5 text-gray-500' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:justify-between my-4">
                <div className="flex gap-4">
                    <p>Suggestion:</p>
                    <p className="span">user interface</p>
                    <p className="span">user experience</p>
                    <p className="span">web design</p>
                    <p className="span">interface</p>
                    <p className="span">app</p>
                </div>
                <div className="flex gap-2 mt-2 lg:mt-0">
                    <p className="font-bold">3,145,684</p>
                    <p className="text-gray-600">results find for"ui/ux design"</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreFilter;