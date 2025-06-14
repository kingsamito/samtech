import React from 'react';
import Slider from "react-slick";
import { review } from '../data/data'
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

const Feedback = () => {
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

    return (
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
    );
}

export default Feedback;