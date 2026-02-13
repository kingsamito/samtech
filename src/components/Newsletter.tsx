import React from 'react';
import { motion, Variants } from 'framer-motion';

const Newsletter = () => {

    const fadeUp: Variants = {
            hidden: { opacity: 0, y: 60 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
            },
        };

    return (
        <motion.div className='bg-[#fdf8ee69] md:p-[100px] mt-28 py-5 px-5' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h1 className='font-semibold text-[25px] md:text-[30px] text-center mb-[30px]' variants={fadeUp}>Subscribe to our newsletter</motion.h1>
            <motion.p className='font-thin text-[20px] md:text-[30px] text-center mb-[30px]' variants={fadeUp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
            <div className='md:relative flex flex-col md:flex-none'>
                <input type='email' placeholder='your@email.com' className='rounded-[62px] p-[20px] md:w-[50%] m-auto block border-black border-[3px]' />
                <button className='bg-gray-500 rounded-[62px] p-[15px] md:absolute md:top-2 md:right-[25.5%] text-white font-semibold uppercase m-auto mt-5 md:mt-0 button-hover'>Subscribe</button>
            </div>
        </motion.div>
    );
}

export default Newsletter;