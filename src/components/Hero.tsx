import React from 'react'

const Hero = () => {
    return (
        <div className='flex px-[100px] pt-[20px] pb-[100px]'>
            <div className='w-1/2 font-[Maven Pro] flex flex-col gap-[20px] justify-center'>
                <h1 className='text-[#1D1D1D] font-extrabold text-[64px] leading-[135%]'>Learn Any Skills to advance your career path</h1>
                <p className='text-[#1D1D1D] font-medium text-[20px] leading-[165%] tracking-[0.5px]'>Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</p>
                <button className='bg-[#1D1D1D] text-white rounded-lg py-[10px] px-[16px] font-extrabold text-[24px] w-min'>Expore</button>
            </div>
            <img src={require('../assets/img/heroImg.png' )} alt='hero' className='w-1/2'/>
        </div>

    )
}

export default Hero