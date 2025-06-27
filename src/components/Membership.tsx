import React from 'react';
import { categories } from '../data/data'
import Group from '../assets/img/online_course.png';


const Membership = () => {
    return (
        <div className="my-12">
            <div className='flex flex-col items-center md:flex md:flex-row px-5 gap-[60px]'>
                <div className="max-w-[70%]">
                    <img src={Group} alt='online-course' className='' />
                </div>
                <div className='font-[Maven Pro] md:flex md:flex-col gap-[20px] justify-center w-[80%] md:w-1/2 my-5'>
                    <h1 className='text-[#1D1D1D] font-bold text-[25px] md:text-[35px] lg:text-[40px] leading-[150%] tracking-[0.4px]'>SamTech helps you Become Experienced</h1>
                    <p className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px] my-5'>SamTech provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.</p>
                    <button className=' border border-black rounded-lg py-[10px] max-w-[400px] px-[16px] font-extrabold md:text-[20px] tracking-[0.4px] button-hover'>Become a member</button>
                </div>
            </div>
            <div className='px-5 text-center my-28 '>
                <h1 className='text-[#1D1D1D] font-extrabold text-[24px] mb-12 font-[Maven Pro]'>Browse Categories</h1>
                <div className='md:flex md:justify-around grid grid-cols-3 gap-5 md:items-center'>
                    {categories.map((category, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <img src={category.img} alt={category.name} />
                            <p className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px] capitalize'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Membership;