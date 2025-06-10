import React from 'react'
import Facebook from "../assets/icons/Facebook.svg"
import Instagram from "../assets/icons/Instagram.svg"
import Linkedin from "../assets/icons/Linkedin.svg"
import Twitter from "../assets/icons/Twitter.svg"
import Youtube from "../assets/icons/Youtube.svg"
import Apple from "../assets/icons/apple 1.svg"
import Google from "../assets/icons/google-play.svg"

const Footer = () => {
  return (
    <section className='bg-[#1D1D1D]'>
      <div className='flex justify-between p-[100px] border-b border-b-gray-500'>
        <div className='text-white w-[40%]'>
          <h1 className='font-bold text-[25px]'>Logo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic aliquid officia inventore voluptatibus soluta itaque tempora fugit, aperiam totam!</p>
          <div className='flex gap-2'>
            <img src={Facebook} alt='Facebook Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <img src={Instagram} alt='Instagram Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <img src={Linkedin} alt='Linkedin Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <img src={Twitter} alt='Twitter Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
            <img src={Youtube} alt='Youtube Icon' className='bg-[#363B47]/[40%] py-[10px] px-[15px] hover:bg-[#FF6636]' />
          </div>
        </div>
        <div>
          <h1 className='font-bold text-[18px] text-white uppercase'>Links</h1>
          <p className='text-gray-300 font-medium text-[16px]'>Home</p>
          <p className='text-gray-300 font-medium text-[16px]'>About Us</p>
          <p className='text-gray-300 font-medium text-[16px]'>Courses</p>
          <p className='text-gray-300 font-medium text-[16px]'>Contact Us</p>
        </div>
        <div>
          <h1 className='font-bold text-[18px] text-white uppercase'>Support</h1>
          <p className='text-gray-300 font-medium text-[16px]'>Help Center</p>
          <p className='text-gray-300 font-medium text-[16px]'>FAQs</p>
          <p className='text-gray-300 font-medium text-[16px]'>Terms & Condition</p>
          <p className='text-gray-300 font-medium text-[16px]'>Privacy Policy</p>
        </div>
        <div>
          <h1 className='font-bold text-[18px] text-white uppercase'>Downlaod our app</h1>
          <div className='bg-[#363B47]/[40%] py-[10px] px-[15px] flex items-center gap-[10px] w-max mt-[10px]'>
            <img src={Apple} alt='Apple Icon' className='h-[40px]' />
            <div>
              <p className='text-gray-300 font-normal'>Download now</p>
              <p className='text-white font-medium text-[18px]'>App Store</p>
            </div>
          </div>
          <div className='bg-[#363B47]/[40%] py-[10px] px-[15px] flex items-center gap-[10px] w-max mt-[10px]'>
            <img src={Google} alt='Google Icon' className='h-[40px]' />
            <div>
              <p className='text-gray-300 font-normal'>Download now</p>
              <p className='text-white font-medium text-[18px]'>Play Store</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-white italic p-[20px]'>© 2024 - SamTech. Designed by Kingsamito. All rights reserved</p>
    </section>
  )
}

export default Footer