import React from 'react';
import { motion, Variants } from 'framer-motion';

const Collaboration = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div>
            <motion.div className='bg-[#F5F8FE] py-20 px-5' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <motion.h1 className='lg:w-[80%] font-bold text-[25px] md:text-[35px] lg:text-[48px] text-[#1C1C1C] m-auto text-center md:leading-[54px]' variants={fadeUp}>Collaborate with 100+
                    leading universities and companies</motion.h1>
                <motion.p className='lg:w-[80%] font-medium text-[16px] text-[#9F9F9F] m-auto text-center mt-5 leading-normal' variants={fadeUp}>WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,</motion.p>
                <motion.div className='grid grid-cols-3 md:grid-cols-4 gap-y-[15px] gap-x-10 mt-[40px]' variants={containerVariants}>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/amazon.png')} alt='amazon' /></motion.div>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/cambridge.png')} alt='cambridge' /></motion.div>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/google.png')} alt='google' /></motion.div>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/harvard.png')} alt='harvard' /></motion.div>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/itb.png')} alt='itb' /></motion.div>
                    <motion.div className='flex justify-center items-center' variants={fadeUp}><img src={require('../assets/img/microsoft.png')} alt='microsoft' /></motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Collaboration;