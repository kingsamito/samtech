import React from 'react'
import Facebook from "../assets/icons/Facebook.svg"
import Instagram from "../assets/icons/Instagram.svg"
import Linkedin from "../assets/icons/Linkedin.svg"
import Twitter from "../assets/icons/Twitter.svg"
import Youtube from "../assets/icons/Youtube.svg"
import Apple from "../assets/icons/apple 1.svg"
import Google from "../assets/icons/google-play.svg"
import { motion, Variants } from 'framer-motion';

const Footer = () => {

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section className='bg-[#1D1D1D]' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <motion.div className='md:flex justify-between md:p-[40px] border-b border-b-gray-500 px-5 py-12' variants={container}>
        <motion.div className='text-white md:w-[40%] text-center md:text-left' variants={fadeUp}>
          <h1 className='font-bold text-[25px]'>Logo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic aliquid officia inventore voluptatibus soluta itaque tempora fugit, aperiam totam!</p>
          <div className='flex justify-center md:flex md:justify-start gap-2 my-10 md:my-5'>
            <motion.img whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} src={Facebook} alt='Facebook Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <motion.img whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} src={Instagram} alt='Instagram Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <motion.img whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} src={Linkedin} alt='Linkedin Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <motion.img whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} src={Twitter} alt='Twitter Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <motion.img whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} src={Youtube} alt='Youtube Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
          </div>
        </motion.div>
        <motion.div className="mb-5 md:mb-0 text-center md:text-left" variants={fadeUp}>
          <h1 className='font-bold text-[18px] text-white uppercase'>Links</h1>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Home</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>About Us</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Courses</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Contact Us</p>
        </motion.div>
        <motion.div className="mb-5 md:mb-0 text-center md:text-left" variants={fadeUp}>
          <h1 className='font-bold text-[18px] text-white uppercase'>Support</h1>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Help Center</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>FAQs</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Terms & Condition</p>
          <p className='text-gray-300 font-medium text-[16px] list-hover cursor-pointer'>Privacy Policy</p>
        </motion.div>
        <motion.div className="flex flex-col items-center md:block" variants={fadeUp}>
          <div>
            <h1 className='font-bold text-[18px] text-white uppercase'>Download our app</h1>
          </div>
          <div className='bg-[#363B47]/[40%] py-[10px] px-[15px] flex items-center gap-[10px] w-max mt-[10px] cursor-pointer button-hover'>
            <img src={Apple} alt='Apple Icon' className='h-[40px]' />
            <div>
              <p className='text-gray-300 font-normal'>Download now</p>
              <p className='text-white font-medium text-[18px]'>App Store</p>
            </div>
          </div>
          <div className='bg-[#363B47]/[40%] py-[10px] px-[15px] flex items-center gap-[10px] w-max mt-[10px] button-hover cursor-pointer'>
            <img src={Google} alt='Google Icon' className='h-[40px]' />
            <div>
              <p className='text-gray-300 font-normal'>Download now</p>
              <p className='text-white font-medium text-[18px]'>Play Store</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <p className='text-center text-white italic p-[20px]'>© 2024 - SamTech. Designed by Kingsamito. All rights reserved</p>
    </motion.section>
  )
}

export default Footer