import tailwind from '../assets/img/tailwind.png'
import react from '../assets/img/react.png'
import angular from '../assets/img/angular.png'
import sass from '../assets/img/sass.png'
import typescript from '../assets/img/typescript.png'
import jquery from '../assets/img/jquery.png'
import python from '../assets/img/python.png'
import php from '../assets/img/php.png'
import bootstrap from '../assets/img/bootstrap.png'
import student1 from '../assets/img/student1.png'
import student2 from '../assets/img/student2.png'
import student3 from '../assets/img/student3.png'
import student4 from '../assets/img/student4.png'
import student5 from '../assets/img/student5.png'

const categories = [
    {
        img:tailwind,
        name: "Tailwind"
    },
    {
        img:react,
        name: "react"
    },
    {
        img:angular,
        name: "angular"
    },
    {
        img:sass,
        name: "sass"
    },
    {
        img:typescript,
        name: "typescript"
    },
    {
        img:jquery,
        name: "jquery"
    },
    {
        img:python,
        name: "python"
    },
    {
        img:php,
        name: "php"
    },
    {
        img:bootstrap,
        name: "bootstrap"
    }
]

const review = [
    {
        img:student1,
        name: "John Doe",
        title: "Senior Software Engineer",
        text: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”"
    },
    {
        img:student2,
        name: "Jane Smith",
        title: "Frontend Developer",
        text: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”"
    },
    {
        img:student3,
        name: "Michael Johnson",
        title: "Senior Designer",
        text: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”"
    },
    {
        img:student4,
        name: "Will Davis",
        title: "Product Manager",
        text: "“Studying at SamTech is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”"
    },
    {
        img:student5,
        name: "David Wilson",
        title: "UX/UI Designer",
        text: "“Higher education in the era of the industrial revolution 4.0 requires breakthrough learning using digital platforms that answer the challenges of millennial students to study anywhere, anytime and with leading-edge ICT technology.”"
    }
]
const instructor = [
    {
        img:student1,
        name: "John Doe",
        title: "Senior Software Engineer",
        star:3,
        students:"4.5k"
    },
    {
        img:student2,
        name: "Jane Smith",
        title: "Frontend Developer",
        star:3.8,
        students:"25.2k"
    },
    {
        img:student3,
        name: "Michael Johnson",
        title: "Senior Designer",
        star:4.5,
        students:"1.75k"
    },
    {
        img:student4,
        name: "Will Davis",
        title: "Product Manager",
        star:5,
        students:"780"
    },
    {
        img:student5,
        name: "David Wilson",
        title: "UX/UI Designer",
        star:5,
        students:"50k"
    }
]

export {
    categories,
    review,
    instructor
}