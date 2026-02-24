import { IconKey } from "../types/icon";

export interface CourseCategory {
    id: string;
    title: string;
    icon: IconKey;
    items: string[];
}

export const courseCategories: CourseCategory[] = [
    {
        id: "development",
        title: "Development",
        icon: "development",
        items: ["Web Development", "Mobile Development", "Software Testing"],
    },
    {
        id: "business",
        title: "Business",
        icon: "business",
        items: ["Marketing", "Finance", "Entrepreneurship"],
    },
    {
        id: "finance",
        title: "Finance & Accounting",
        icon: "finance",
        items: ["Stock exchange", "Bills", "Real estate"],
    },
    {
        id: "IT",
        title: "IT & Software",
        icon: "IT",
        items: ["Windows", "Linux", "Mac"],
    },
    {
        id: "office",
        title: "Office Productivity",
        icon: "office",
        items: ["Human management", "Leadership", "Time Manangement"],
    },
    {
        id: "personal",
        title: "Personal Development",
        icon: "personal",
        items: ["Emotional Intelligence", "Communication", "Problem solving"],
    },
    {
        id: "design",
        title: "Design",
        icon: "design",
        items: ["AdobeXR", "Photoshop", "Canva"],
    },
]