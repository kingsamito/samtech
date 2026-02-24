import React, { useState } from 'react';
import ExploreNav from '../components/ExploreNav';
import ExploreFilter from '../components/ExploreFilter';
import Category from '../components/Category';
import Courses from '../components/Courses';

const Explore = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div>
            <ExploreNav />

            <div className='lg:py-6 lg:px-[150px] px-8 py-10'>
                <ExploreFilter />

                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    <Category
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />

                    <Courses
                        selectedCategory={selectedCategory}
                    />

                </div>
            </div>
        </div>
    );
};

export default Explore;
