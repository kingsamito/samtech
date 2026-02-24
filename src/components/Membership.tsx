import React from 'react';
import { categories } from '../data/data'
import Group from '../assets/img/online_course.png';
import { motion, stagger, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const Membership = () => {

    const fadeLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
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

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div className="my-12">
            <motion.div className='flex flex-col items-center md:flex md:flex-row px-5 gap-[60px]' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <motion.div className="max-w-[70%]" variants={fadeLeft}>
                    <img src={Group} alt='online-course' className='' />
                </motion.div>
                <motion.div className='font-[Maven Pro] md:flex md:flex-col gap-[20px] justify-center w-[80%] md:w-1/2 my-5' variants={fadeRight}>
                    <h1 className='text-[#1D1D1D] font-bold text-[25px] md:text-[35px] lg:text-[40px] leading-[150%] tracking-[0.4px]'>SamTech helps you Become Experienced</h1>
                    <p className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px] my-5'>SamTech provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.</p>
                    <Link to="/signup">
                        <button className=' border border-black rounded-lg py-[10px] max-w-[400px] px-[16px] font-extrabold md:text-[20px] tracking-[0.4px] button-hover'>Become a member</button>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div className='px-5 text-center my-28' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <motion.h1 className='text-[#1D1D1D] font-extrabold text-[24px] mb-12 font-[Maven Pro]' variants={fadeUp}>Browse Categories</motion.h1>
                <motion.div className='md:flex md:justify-around grid grid-cols-3 gap-5 md:items-center' variants={staggerContainer}>
                    {categories.map((category, index) => (
                        <motion.div key={index} className='flex flex-col items-center justify-center' variants={fadeUp} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300}}>
                            <img src={category.img} alt={category.name} />
                            <p className='text-[#1D1D1D] font-medium text-[15px] md:text-[20px] leading-[165%] tracking-[0.5px] capitalize'>{category.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Membership;