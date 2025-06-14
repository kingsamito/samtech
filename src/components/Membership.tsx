import React from 'react';
import { categories } from '../data/data'

const Membership = () => {
    return (
        <div>
            <div className='flex p-[100px] gap-[60px]'>
                <img src={require('../assets/img/online-course.jpg')} alt='online-course' className='w-1/2' />
                <div className='font-[Maven Pro] flex flex-col gap-[20px] justify-center w-1/2'>
                    <h1 className='text-[#1D1D1D] font-bold text-[40px] leading-[150%] tracking-[0.4px]'>SamTech helps you Become Experienced</h1>
                    <p className='text-[#1D1D1D] font-medium text-[20px] leading-[165%] tracking-[0.5px]'>SamTech provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.</p>
                    <button className=' border border-black rounded-lg py-[10px] px-[16px] font-extrabold text-[20px] w-max tracking-[0.4px]'>Become a member</button>
                </div>
            </div>
            <div className='px-[100px] pb-[100px]'>
                <h1 className='text-[#1D1D1D] font-extrabold text-[24px] mb-[30px] font-[Maven Pro]'>Browse Categories</h1>
                <div className='flex justify-around items-center'>
                    {categories.map((category, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <img src={category.img} alt={category.name} />
                            <p className='text-[#1D1D1D] font-medium text-[20px] leading-[165%] tracking-[0.5px] capitalize'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Membership;