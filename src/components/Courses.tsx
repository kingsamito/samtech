import React from 'react';
import Image1 from '../assets/img/card-image1.png';
import Image2 from '../assets/img/card-image2.png';
import Image3 from '../assets/img/card-image3.png';
import Image4 from '../assets/img/card-image4.png';
import Image5 from '../assets/img/card-image5.png';
import Image6 from '../assets/img/card-image6.png';
import star from '../assets/icons/Star.svg'
import { UserIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "framer-motion";

interface CoursesProps {
    selectedCategory: string | null;
}

const Courses = ({ selectedCategory } : CoursesProps) => {

    const courseList = [
        {
            id: 1,
            image: Image1,
            category: "Design",
            price: 49,
            title: "Complete Blender Creator: Learn 3D Modeling for Beginners",
            rating: 4.9,
            students: "123,764",
        },
        {
            id: 2,
            image: Image2,
            category: "Development",
            price: 32,
            title: "Adobe Premiere Pro CC - Advanced Training Course",
            rating: 4.5,
            students: "764,321",
        },
        {
            id: 3,
            image: Image3,
            category: "Business",
            price: 32,
            title: "Digital Marketing Masterclass",
            rating: 4.5,
            students: "764,321",
        },
        {
            id: 4,
            image: Image4,
            category: "Personal Development",
            price: 50,
            title: "Emotional Intelligence",
            rating: 4.9,
            students: "987,324",
        },
        {
            id: 5,
            image: Image5,
            category: "Finance & Accounting",
            price: 75,
            title: "Bills",
            rating: 4.8,
            students: "890,356",
        },
        {
            id: 6,
            image: Image6,
            category: "IT & Software",
            price: 100,
            title: "Windows",
            rating: 4.5,
            students: "700,894",
        },
    ];

    const filteredCourses = selectedCategory ? courseList.filter(course => course.category === selectedCategory) : courseList;

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
                {filteredCourses.map((course) => (
                    <motion.div
                        key={course.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col gap-4 outline outline-gray-200 shadow-md"
                    >
                        <div>
                            <img
                                src={course.image}
                                className="w-full object-cover"
                                alt="Course"
                            />
                        </div>

                        <div className="px-2">
                            <div className="flex justify-between items-center mb-2">
                                <div className="w-fit px-2 h-[20px] bg-[#F1C5B7] text-[#FF6636] text-[12px] font-bold flex items-center justify-center">
                                    <h4>{course.category}</h4>
                                </div>

                                <h4 className="text-[#FF6636] text-xl font-bold">
                                    ${course.price}
                                </h4>
                            </div>

                            <h3 className="font-bold text-lg text-gray-700">
                                {course.title}
                            </h3>
                        </div>

                        <div className="flex justify-between items-center text-gray-500 outline outline-gray-200 p-2">
                            <span className="flex items-center">
                                <img src={star} alt="Star" className="w-4 h-4 mr-1" />
                                {course.rating}
                            </span>

                            <span className="flex items-center">
                                <UserIcon className="w-4 h-4 mr-1 text-blue-500" />
                                {course.students} students
                            </span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

    )
}

export default Courses;