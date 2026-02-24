import React from 'react';
import orangeArrow from '../assets/icons/orangeRightArrow.svg';
import star from '../assets/icons/Star.svg';
import { instructor } from '../data/data';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const Instructor = () => {

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeLeft: Variants = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeRight: Variants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div>
            <div className='bg-[#fdf8ee69]  py-[100px] pb-[250px]'>
                <motion.div className='flex flex-col md:flex-row w-[85%] m-auto gap-8' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div className='bg-gradient-to-r from-[#CC522B] to-[#FF6636] flex md:w-1/2 pl-5 py-5 items-center' variants={fadeLeft}>
                        <div className='text-white md:w-[65%] flex flex-col gap-1'>
                            <h1 className='font-semibold text-[32px]'>Become an instructor</h1>
                            <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <Link to="/signup">
                                <motion.button className='bg-white text-[#FF6636] py-3 px-6 my-5 flex items-center font-semibold text-[16px] gap-2 w-fit hover:bg-gray-100' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5, ease: "easeOut"}}>Start Teaching <img src={orangeArrow} className='' /></motion.button>
                            </Link>
                        </div>
                        <img src={require("../assets/img/Become an Instructor.png")} className='2xl:h-[230px] h-[200px] hidden lg:inline' />
                    </motion.div>
                    <motion.div className='bg-white p-5 flex flex-col justify-center gap-5' variants={fadeRight}>
                        <h1 className='font-semibold text-[25px] md:text-[32px]'>Your teaching & earning steps</h1>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='flex items-center gap-4'>
                                <img src={require("../assets/img/Number1.png")} className='h-[30px]' />
                                <p>Apply to become instructor</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={require("../assets/img/Number2.png")} className='h-[30px]' />
                                <p>Build & edit your profile</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={require("../assets/img/Number3.png")} className='h-[30px]' />
                                <p>Create your new course</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={require("../assets/img/Number4.png")} className='h-[30px]' />
                                <p>Start teaching & earning</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className='w-[90%] mx-auto mt-[-200px] p-[50px] border bg-white' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut"}} viewport={{ once: true, amount: 0.2 }}>
                <h1 className='font-semibold text-[30px] md:text-[40px] text-center mb-8'>Top instructors</h1>
                <motion.div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5' variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {instructor.map((instructor, key) => (
                        <motion.div variants={fadeUp} key={key} whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 250 }} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                            <img src={instructor.img} alt={instructor.img} className='w-full' />
                            <div className='text-center border border-b-0 p-3'>
                                <h2 className='font-bold'>{instructor.name}</h2>
                                <h4 className='text-[#8C94A3]'>{instructor.title}</h4>
                            </div>
                            <div className='flex justify-between items-center p-3 border'>
                                <div className='flex gap-1 items-center'>
                                    <img src={star} alt="star" className='h-[20px]' />
                                    <p className='font-semibold'>{instructor.star}</p>
                                </div>
                                <p className='text-[#8C94A3]'><span className='text-black font-semibold'>{instructor.students}</span> students</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Instructor;