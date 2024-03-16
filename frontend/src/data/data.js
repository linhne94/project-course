// import icons
import { HiAcademicCap, HiAnnotation, HiUserGroup, HiBriefcase } from "react-icons/hi";

import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,

} from 'react-icons/io';
//IMAGE
import HeroImg from '../assets/images/features-2.png'
import SoftWareImg from '../assets/images/software.jpg'
import SafetyImg from '../assets/images/safety.jpg'
import DesignImg from '../assets/images/design.jpg'
import MarketingImg from '../assets/images/marketing.jpg'
import HeathyImg from '../assets/images/healthy.jpg'
import PhotoImg from '../assets/images/photo.jpg'

import CImg from '../assets/images/Product/c.jpg'
import FullStackImg from '../assets/images/Product/full-stack.jpg'
import HtmlImg from '../assets/images/Product/html-css.jpg'
import JsImg from '../assets/images/Product/js.jpg'
import NodeImg from '../assets/images/Product/node.jpg'
import PythonImg from '../assets/images/Product/python.jpg'
import ReactImg from '../assets/images/Product/react.jpg'
import SafeTyImg from '../assets/images/Product/safety.jpg'
import SassImg from '../assets/images/Product/sass.jpg'
import UbuntuImg from '../assets/images/Product/ubuntu.png'


export const hero = {
    title1: 'Unlocking Eternity ',
    title2: 'Through Knowledge',
    subtitle: ' Expand Your Horizons and Transform Your Future with Brainity\'s Comprehensive Online Learning Platform',
    buttonText: 'Learn Now',
    heroImg: <HeroImg />
}

export const navigation = [
    {
        name: 'home',
        href: '/',
    },
    {
        name: 'path',
        href: 'path',
    },
    {
        name: 'Blog',
        href: 'blog',
    },

]

export const features = {
    name: 'brainity',
    title: 'Discover Limitless Learning: Explore Our Brainity Courses Today!',
    items: [
        {
            icon: <HiAcademicCap />,
            title: '1000+',
            subtitle: 'Customer'
        },
        {
            icon: <HiAnnotation />,
            title: 'Professional',
            subtitle: 'Customer Support'
        },
        {
            icon: <HiUserGroup />,
            title: 'Connect',
            subtitle: 'Create a community'
        },
        {
            icon: <HiBriefcase />,
            title: 'Quality',
            subtitle: 'Job guarantee'
        },

    ]
}

export const collectionCourse = {
    title: 'Science Courses Collection',
    subtitle: 'We have the largest collection of courses',
    buttonText: 'View All Collection',
    collection: [
        { name: 'IT & Software', quality: 6, image: <SoftWareImg /> },
        { name: 'Safety Information', quality: 7, image: <SafetyImg /> },
        { name: 'Design', quality: 8, image: <DesignImg /> },
        { name: 'Marketing', quality: 7, image: <MarketingImg /> },
        { name: 'Photography', quality: 9, image: <PhotoImg /> },
        { name: 'Healthy & Fitness', quality: 8, image: <HeathyImg /> }
    ]
}

export const product = {
    titlePro: 'Courses Pro',
    subtitlePro: 'Delve Deeper, Achieve Greater: Unleashing Pro-Level Proficiency.',
    titleNor: 'Course Free',
    subtitleNor: 'Foundations: Start Your Learning Journey Here',
    coursePro: [
        {
            title: 'HTML, CSS Pro',
            subtitle: 'For beginners',
            cost: 500000,
            oldCost: 850000,
            image: <HtmlImg />
        }, {
            title: 'Fullstack Development',
            subtitle: 'Comprehensive course',
            cost: 1200000,
            oldCost: 2000000,
            image: <FullStackImg />
        },
        {
            title: 'JavaScript Fundamental',
            subtitle: 'For beginners',
            cost: 700000,
            oldCost: 1100000,
            image: <JsImg />
        }
    ],
    courseNor: [
        {
            title: 'Node.js Development',
            subtitle: 'Building applications with Node.js',
            image: <NodeImg />
        },
        {
            title: 'Python Programming',
            subtitle: 'Learn Python programming from basic to advanced',
            image: <PythonImg />
        }
        ,
        {
            title: 'React.js Development',
            subtitle: 'Building web applications with React.js',
            image: <ReactImg />
        },
        {
            title: 'Information Security',
            subtitle: 'Information security course',
            image: <SafeTyImg />
        }, {
            title: 'Sass CSS Preprocessor',
            subtitle: 'Learn Sass to make CSS more efficient',
            image: <SassImg />
        }, {
            title: 'Ubuntu Operating System',
            subtitle: 'Learn about the Ubuntu operating system',
            cost: 400000, image: <UbuntuImg />
        }, {
            title: 'C Programming Language',
            subtitle: 'For beginners', image: <CImg />
        }

    ]

}

export const footer = {
    company: {
        name: 'company',
        items: [
            {
                title: 'About us',
                link: '/about'
            }, {
                title: 'Blog',
                link: '/blog'
            },
            {
                title: 'Buddy Profile',
                link: '/buddyProile'
            },
            {
                title: 'Member Ship',
                link: '/member'
            },
        ]
    },
    social: {
        name: 'social',
        items: [
            {
                title: 'Facebook',
                link: '/'
            }, {
                title: 'Instagram',
                link: '/'
            },
            {
                title: 'Git Hub',
                link: '/'
            },
            {
                title: 'Twitter',
                link: '/'
            },
        ]
    },
    support: {
        name: 'support',
        items: [
            {
                title: 'Documentation',
                link: '/'
            }, {
                title: 'Forums',
                link: '/'
            },
            {
                title: 'Language Packs',
                link: '/'
            },
            {
                title: 'Contact',
                link: '/'
            },
        ]
    }
};
