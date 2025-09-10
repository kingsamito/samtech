import React from 'react';
import SignupImage from '../assets/img/signup.png';

function Signin() {
    return (
        <div className="bg-gradient-to-r from-[#FF6636] to-[#FFB199]">
            <h1 className='text-[#1D1D1D] absolute font-bold text-[25px] p-6'>Logo</h1>
            <div className="flex justify-center items-center h-screen lg:grid lg:grid-cols-5">
                <div className="hidden lg:block lg:col-span-2 relative lg:left-20 xl:left-36 xl:w-[500px] w-[400px]">
                    <img src={SignupImage} alt="signup-image" />
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-xl lg:rounded-l-[40px] lg:h-[100vh]">
                    <p className="font-bold text-[30px]">Log in to your account</p>
                    <form className="space-y-6 max-w-md w-full mx-auto mt-10">
                        <div className="relative">
                            <label htmlFor="email" className="absolute -top-1 left-3 bg-white px-1 text-sm text-gray-400 font-bold">Email</label>
                            <input id="email" type="email" className="w-full border border-2 border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#FF6636]" />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="absolute -top-1 left-3 bg-white px-1 text-sm text-gray-400 font-bold">Password</label>
                            <input id="password" type="password" className="w-full border border-2 border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#FF6636]" />
                        </div>
                        <button type="submit" className="w-full bg-[#FF6636] text-white font-medium py-2 rounded-md hover:bg-[#e65c2d] transition duration-200">Sign In</button>
                        <p className="text-center md:text-left text-sm lg:text-[15px] text-gray-600">Don't have an account? <a href="/signup" className="text-[#FF6636] lg:text-[15px] hover:underline">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signin;