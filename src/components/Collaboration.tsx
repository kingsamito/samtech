import React from 'react';

const Collaboration = () => {
    return (
        <div>
            <div className='bg-[#F5F8FE] py-[100px]'>
                <h1 className='font-bold text-[48px] text-[#1C1C1C] w-[813px] m-auto text-center leading-[54px]'>Collaborate with 100+
                    leading universities and companies</h1>
                <p className='font-medium text-[16px] text-[#9F9F9F] w-[613px] m-auto text-center leading-normal'>WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,</p>
                <div className='grid grid-cols-4 gap-y-[15px] mt-[40px]'>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/amazon.png')} alt='amazon' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/cambridge.png')} alt='cambridge' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/google.png')} alt='google' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/harvard.png')} alt='harvard' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/itb.png')} alt='itb' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/microsoft.png')} alt='microsoft' /></div>
                    <div className='flex justify-center items-center'><img src={require('../assets/img/amazon.png')} alt='amazon' /></div>
                </div>
            </div>
        </div>
    );
}

export default Collaboration;