import React from 'react';
import Dropdown from './Dropdown';
import { courseCategories } from '../data/categories';
import { iconMap } from '../utils/iconMap';

interface CategoryProps {
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}


const Category = ({selectedCategory, onSelectCategory } : CategoryProps) => {

    return (
        <div className="outline outline-gray-200 shadow-md">
            <div>
                <div className="outline outline-gray-200">
                    <h2 className="text-[20px] font-medium p-5">CATEGORY</h2>
                </div>

                <div>
                    {courseCategories.map((course) => {
                        const Icon = iconMap[course.icon];

                        const isActive = selectedCategory === course.title;

                        return (
                            <div 
                                key={course.id} 
                                onClick={() => onSelectCategory(selectedCategory === course.title ? null : course.title)}
                                className={`border rounded-lg p-2 transition-colors ${isActive ? "border-[#FF6636] bg-orange-50" : "border-gray-200 hover:border-[#FF6636]"}`} 
                            >
                                <Dropdown
                                    title={course.title}
                                    icon={Icon}
                                    items={course.items}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Category;