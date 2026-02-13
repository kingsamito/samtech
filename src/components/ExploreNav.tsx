import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, BellIcon, HeartIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon,} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const ExploreNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-4 border-b shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">

            {/* Top Navbar */}
            <div className="flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-[#1D1D1D] font-bold text-[25px]">
                    Logo
                </h1>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">

                    {/* Browse + Search */}
                    <div className="flex items-center gap-3">
                        <div className="border w-[180px] h-[40px] p-3 flex justify-between items-center">
                            <p className="text-gray-500">Browse</p>
                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </div>

                        <div className="border w-[300px] h-[40px] p-3 flex items-center gap-2">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="What do you want to learn..."
                                className="text-gray-500 text-[14px] w-full outline-0"
                            />
                        </div>
                    </div>

                    {/* Icons + Buttons */}
                    <div className="flex items-center gap-6">
                        <BellIcon className="w-6 h-6 text-gray-600 icon-hover" />
                        <HeartIcon className="w-6 h-6 text-gray-600 icon-hover" />
                        <ShoppingCartIcon className="w-6 h-6 text-gray-60r icon-hover" />

                        <Link to="/signup">
                            <button className="w-[150px] bg-gray-400 text-black font-medium py-2 rounded-md hover:text-white button-hover">
                                Create Account
                            </button>
                        </Link>

                        <Link to="/signin">
                            <button className="w-[100px] bg-black text-white font-medium py-2 rounded-md button-hover">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-7 h-7" />
                    ) : (
                        <Bars3Icon className="w-7 h-7" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mt-4 flex flex-col gap-4 lg:hidden">

                    <div className="border p-3 flex justify-between items-center">
                        <p className="text-gray-500">Browse</p>
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </div>

                    <div className="border p-3 flex items-center gap-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full outline-0"
                        />
                    </div>

                    <div className="flex gap-4">
                        <BellIcon className="w-6 h-6 text-gray-600 icon-hover" />
                        <HeartIcon className="w-6 h-6 text-gray-600 icon-hover" />
                        <ShoppingCartIcon className="w-6 h-6 text-gray-600 icon-hover" />
                    </div>

                    <Link to="/signup">
                        <button className="w-full bg-gray-400 py-2 rounded-md button-hover hover:text-white">
                            Create Account
                        </button>
                    </Link>

                    <Link to="/signin">
                        <button className="w-full bg-black text-white py-2 rounded-md button-hover">
                            Sign In
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ExploreNav;
