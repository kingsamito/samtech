import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-[20px] font-[Roboto] px-[100px]'>
        <h1 className='text-[#1D1D1D] font-bold text-[25px]'>Logo</h1>
        <ul className='flex gap-[50px] text-[#1D1D1D] font-semibold text-[20px]'>
            <li className=''><a href="/">Home</a></li>
            <li className=''><a href="/about">About</a></li>
            <li className=''><a href="/contact">Courses</a></li>
            <li className=''><a href="/contact">Faq</a></li>
            <li className=''><a href="/contact">Contact</a></li>
        </ul>
        <div className='flex gap-[25px] text-[#1D1D1D] font-semibold text-[20px]'>
            <button className=' border border-black py-[10px] px-[16px] rounded-lg'>Sign In</button>
            <button className='bg-black text-white rounded-lg py-[10px] px-[16px]'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar