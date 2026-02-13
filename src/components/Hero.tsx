import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
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

    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div className='flex flex-col md:flex-row md:items-center gap-5 px-10 pt-[20px] pb-[100px]' variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className='font-[Maven Pro] md:flex md:flex-col md:gap-[20px] md:justify-center' variants={containerVariants}>
                <motion.h1 variants={fadeUp} className='m text-[#1D1D1D] font-extrabold text-[30px] md:text-[40px] lg:text-[60px] leading-[135%] my-8'>Learn any skills to advance your career path</motion.h1>
                <motion.p variants={fadeUp} className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px]'>Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</motion.p>
                <motion.div variants={fadeUp}>
                    <Link to="/explore">
                        <button className='bg-[#1D1D1D] text-white rounded-lg py-[10px] px-[16px] font-extrabold md:text-[24px] mt-5 w-min button-hover'>Explore</button>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div className="mt-5" variants={fadeUp}>
                <img src={require('../assets/img/heroImg.png')} alt='hero' className='mt-5' />
            </motion.div>
        </motion.div>

    )
}

export default Hero