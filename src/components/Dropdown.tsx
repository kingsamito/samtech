import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface DropdownProps {
    title: string;
    icon: React.ElementType;
    items: string[];
}

function Dropdown({ title, icon: Icon, items }: DropdownProps) {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="my-2">
            {/* Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
            >
                <div className="flex gap-4 font-medium items-center">
                    <Icon className="w-7" />
                    <h5 className="text-lg">{title}</h5>
                </div>

                {dropdown ? (
                    <ChevronUpIcon className="w-5" />
                ) : (
                    <ChevronDownIcon className="w-5" />
                )}
            </div>

            {/* Content */}
            {dropdown && (
                <ul className="space-y-2 mt-5">
                    {items.map((item) => (
                        <li key={item} className="flex items-center gap-4 pl-5">
                            <input
                                type="checkbox"
                                className="h-4 w-4 accent-[#FF6636] rounded-none"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
