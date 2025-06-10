import React, { useEffect, useRef, useState } from 'react'
import { categories, instructor, review } from '../data/data'
import { getSearch } from '../services/services'
import leftArrow from '../assets/icons/leftArrow.svg'
import rightArrow from '../assets/icons/rightArrow.svg'
import orangeArrow from '../assets/icons/orangeRightArrow.svg'
import star from '../assets/icons/Star.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "black", borderRadius: "50%", }}
            onClick={onClick}
        />
    );
}


const Section = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    };
    const [popularVideo, setPopularVideo] = useState<any[]>([])

    useEffect(() => {
        getSearch().then(res => {
            setPopularVideo(res)
        })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(popularVideo)
    }, [popularVideo])

    const [scrollX, setScrollX] = useState(0);
    const videoListRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (videoListRef.current) {
            videoListRef.current.scrollBy({
                left: -360,
                behavior: 'smooth',
            });
            setScrollX(scrollX - 360);
        }
    };

    const handleScrollRight = () => {
        if (videoListRef.current) {
            videoListRef.current.scrollBy({
                left: 360,
                behavior: 'smooth',
            });
            setScrollX(scrollX + 360);
        }
    };
    return (
        <>
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
            <div className='flex p-[100px] gap-[60px]'>
                <img src={require('../assets/img/online-course.jpg')} alt='online-course' className='w-1/2' />
                <div className='font-[Maven Pro] flex flex-col gap-[20px] justify-center w-1/2'>
                    <h1 className='text-[#1D1D1D] font-bold text-[40px] leading-[150%] tracking-[0.4px]'>SamTech helps you Become Experienced</h1>
                    <p className='text-[#1D1D1D] font-medium text-[20px] leading-[165%] tracking-[0.5px]'>SamTech provides e-learning solutions for companies, universities and individual professionals. It allows users to create courses, and provides an integrated learning management system. Its offerings include digital course tools, study materials, IT infrastructure and other operations.</p>
                    <button className=' border border-black rounded-lg py-[10px] px-[16px] font-extrabold text-[20px] w-max tracking-[0.4px]'>Become a member</button>
                </div>
            </div>
            <div className='px-[100px] pb-[100px]'>
                <h1 className='text-[#1D1D1D] font-extrabold text-[24px] mb-[30px] font-[Maven Pro]'>Browse Categories</h1>
                <div className='flex justify-around items-center'>
                    {categories.map((category, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <img src={category.img} alt={category.name} />
                            <p className='text-[#1D1D1D] font-medium text-[20px] leading-[165%] tracking-[0.5px] capitalize'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#F5F7FA] p-[100px] relative'>
                <h1 className='font-semibold text-[40px] text-center mb-[30px]'>Popular Courses</h1>
                <div className='flex overflow-auto gap-5 no-scrollbar' ref={videoListRef}>
                    <button
                        style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)' }}
                        onClick={handleScrollLeft}>
                        <img src={leftArrow} alt='left arrow icon' />
                    </button>
                    {
                        popularVideo?.map((item, key) => (
                            <div key={key} className='flex-[0_0_auto] w-[360px] bg-white rounded-b-xl'>
                                <div className='relative'>
                                    <img src={item.thumbnails[0].url} className='rounded-t-xl' />
                                    <span className='absolute bottom-2 right-2 bg-[#0000008f] text-white p-1 rounded'>{item.video_length}</span>
                                </div>
                                <div className='p-3 h-[150px] flex flex-col'>
                                    <h1 className='text-[#1D1D1D] font-extrabold text-[16px]'>{item.title}</h1>
                                    <h3 className='text-[#1D1D1D] font-medium leading-[165%] text-[15px]'>{item.author}</h3>
                                    <div className='flex justify-between mt-auto'>
                                        <p className='font-medium text-[15px] text-[#9F9F9F]'>{item.number_of_views} views</p>
                                        <p className='font-medium text-[15px] text-[#9F9F9F]'>{item.published_time}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <button
                        style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)' }}
                        onClick={handleScrollRight}>
                        <img src={rightArrow} alt='left arrow icon' />
                    </button>
                </div>
            </div>
            <div className=' p-[100px]'>
                <h1 className='font-semibold text-[30px] text-center mb-[30px]'>What they say about SamTech</h1>
                <p className='font-thin text-[30px] text-center mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <Slider {...settings}>
                    {review.map((review, key) => (
                        <div key={key} className='p-4 !flex flex-col gap-3'>
                            <p className='font-bold'>{review.text}</p>
                            <div className='flex gap-2'>
                                <img src={review.img} alt={review.img} className='rounded-full w-[50px] h-[50px]' />
                                <div className='text-[#1C1C1C]'>
                                    <h1 className='font-bold text-[13px] '>{review.name}</h1>
                                    <h3 className='text-[12px]'>{review.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='bg-[#fdf8ee69]  py-[100px] pb-[250px]'>
                <div className='flex 2xl:w-[65%] w-[85%] m-auto gap-4'>
                    <div className='bg-gradient-to-r from-[#CC522B] to-[#FF6636] flex w-1/2 pl-5 items-center'>
                        <div className='text-white w-[65%] flex flex-col gap-1'>
                            <h1 className='font-semibold text-[32px]'>Become an instructor</h1>
                            <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <button className='bg-white text-[#FF6636] py-3 px-6 flex items-center font-semibold text-[16px] gap-2 w-fit'>Start Teaching <img src={orangeArrow} className='' /></button>
                        </div>
                        <img src={require("../assets/img/Become an Instructor.png")} className='2xl:h-[230px] h-[200px]' />
                    </div>
                    <div className='bg-white w-1/2 p-5 flex flex-col justify-center gap-5'>
                        <h1 className='font-semibold text-[32px]'>Your teaching & earning steps</h1>
                        <div className='grid grid-cols-2 gap-5'>
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
                    </div>
                </div>
            </div>
            <div className='w-[85%] mx-auto mt-[-200px] 2xl:p-[100px] p-[50px] border bg-white'>
                <h1 className='font-semibold text-[40px] text-center'>Top instructors</h1>
                <div className='grid 2xl:grid-cols-5 grid-cols-4 gap-5'>
                    {instructor.map((instructor, key) => (
                        <div>
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
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#fdf8ee69] p-[100px]'>
                <h1 className='font-semibold text-[30px] text-center mb-[30px]'>Subscribe to our newsletter</h1>
                <p className='font-thin text-[30px] text-center mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='relative'>
                    <input type='email' placeholder='your@email.com' className='rounded-[62px] p-[20px] w-[50%] m-auto block border-black border-[3px]' />
                    <button className='bg-gray-500 rounded-[62px] p-[15px] absolute top-2 right-[25.5%] text-white font-semibold uppercase'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Section