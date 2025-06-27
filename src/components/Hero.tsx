import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center gap-5 px-10 pt-[20px] pb-[100px]'>
            <div className='font-[Maven Pro] md:flex md:flex-col md:gap-[20px] md:justify-center'>
                <h1 className='m text-[#1D1D1D] font-extrabold text-[30px] md:text-[40px] lg:text-[60px] leading-[135%] my-8'>Learn any skills to advance your career path</h1>
                <p className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px]'>Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</p>
                <button className='bg-[#1D1D1D] text-white rounded-lg py-[10px] px-[16px] font-extrabold md:text-[24px] mt-5 w-min button-hover'>Explore</button>
            </div>
            <div className="">
                <img src={require('../assets/img/heroImg.png' )} alt='hero' className='mt-5'/>
            </div>
        </div>

    )
}

export default Hero