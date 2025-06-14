import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-[#fdf8ee69] p-[100px]'>
            <h1 className='font-semibold text-[30px] text-center mb-[30px]'>Subscribe to our newsletter</h1>
            <p className='font-thin text-[30px] text-center mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='relative'>
                <input type='email' placeholder='your@email.com' className='rounded-[62px] p-[20px] w-[50%] m-auto block border-black border-[3px]' />
                <button className='bg-gray-500 rounded-[62px] p-[15px] absolute top-2 right-[25.5%] text-white font-semibold uppercase'>Subscribe</button>
            </div>
        </div>
    );
}

export default Newsletter;