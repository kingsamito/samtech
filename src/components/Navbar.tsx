import React, { useState} from 'react';
import Menu from '../assets/img/menu_icon.png';
import Close from '../assets/img/close_icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='flex items-center justify-between py-[20px] font-[Roboto] px-10'>

      {/* Mobile screen view */}
      <div className='mobile-view-navbar md:hidden w-full'>
        <div className="flex justify-between items-center">
          <h1 className='text-[#1D1D1D] font-bold text-[25px]'>Logo</h1>
          <div className="w-[50px] button-hover">
            <img src={Menu} alt="menu-icon" onClick={toggleMenu} />
          </div>
        </div>

        {/* Side bar menu */}
        <div className={`bg-[#1D1D1D] w-[250px] h-auto px-5 py-5 rounded-lg top-0 right-0 fixed transition-transform transform duration-300 shadow-lg ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="w-[35px] bg-white rounded-lg mb-12 button-hover">
            <img src={Close} alt="close-icon" onClick={toggleMenu} />
          </div>

          {/* Side bar menu items */}
          <div>
            <ul className='flex flex-col gap-[20px] text-white text-center font-semibold text-[18px]'>
              <li className='list-hover'><a href="/">Home</a></li>
              <li className='list-hover'><a href="/about">About</a></li>
              <li className='list-hover'><a href="/contact">Courses</a></li>
              <li className='list-hover'><a href="/contact">Faq</a></li>
              <li className='list-hover'><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className='flex flex-col gap-[25px] text-[#1D1D1D] font-semibold text-[17px] mt-10'>
            <button className=' border border-black py-[10px] bg-white px-[16px] rounded-lg button-hover'>Sign In</button>
            <button className='bg-black text-white rounded-lg py-[10px] px-[16px] button-hover'>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Desktop screen view */}
      <div className='desktop-view-navbar flex justify-between items-center hidden md:flex w-full'>
        <h1 className='text-[#1D1D1D] font-bold md:text-[20px] lg:text-[25px]'>Logo</h1>
        <ul className='flex md:gap-[30px] lg:gap-[60px] text-[#1D1D1D] font-semibold lg:text-[20px]'>
          <li className='list-hover'><a href="/">Home</a></li>
          <li className='list-hover'><a href="/about">About</a></li>
          <li className='list-hover'><a href="/contact">Courses</a></li>
          <li className='list-hover'><a href="/contact">Faq</a></li>
          <li className='list-hover'><a href="/contact">Contact</a></li>
        </ul>
        <div className='flex gap-[25px] text-[#1D1D1D] font-semibold lg:text-[20px]'>
          <button className=' border border-black py-[10px] px-[16px] rounded-lg button-hover'>Sign In</button>
          <button className='bg-black text-white rounded-lg py-[10px] px-[16px] button-hover'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar