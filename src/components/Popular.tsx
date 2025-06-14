import React, { useState, useEffect, useRef } from 'react';
import { getSearch } from '../services/services'
import leftArrow from '../assets/icons/leftArrow.svg'
import rightArrow from '../assets/icons/rightArrow.svg'

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


const Popular = () => {
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
    );
}

export default Popular;
// This component is currently empty. You can add your code here to display popular items or features as needed.