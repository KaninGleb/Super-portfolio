import {theme} from "../styles/Theme.tsx";
import chertNodes from "../assets/images/projects/project-1.svg";
import protectX from "../assets/images/projects/project-2.svg";
import kahoot from "../assets/images/projects/project-3.svg";
import kotikBot from "../assets/images/projects/project-4.svg";
import portfolio from "../assets/images/projects/project-5.svg";

export const textData = {
    main: {
        paragraph: 'He crafts responsive websites where technologies meet creativity',
    },
    aboutMe: {
        paragraph1: 'Hello, I’m Elias!',
        paragraph2: 'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.',
        paragraph3: 'Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.',
    },
    contacts: {
        paragraph: 'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me'
    },
}

export const sectionsData = {
    projects: {
        id: 'projects',
        name: 'projects',
        symbol: '#',
        Wmin: 30,
        Wmax: 510,
    },
    skills: {
        id: 'skills',
        name: 'skills',
        symbol: '#',
        Wmin: 127,
        Wmax: 239,
    },
    aboutMe: {
        id: 'about-me',
        name: 'about-me',
        symbol: '#',
        Wmin: 127,
        Wmax: 326,
    },
    contacts: {
        id: 'contacts',
        name: 'contacts',
        symbol: '#',
        Wmin: 127,
        Wmax: 127,
    },
    allProjects: {
        id: 'projects',
        name: 'complete-apps',
        symbol: '#',
    },
    headerProjects: {
        name: 'projects',
        symbol: '/',
    },
    smallProjects: {
        name: 'small-projects',
        symbol: '#',
    }
}

export const projectsData = {
    chertNodes: {
        software: ['HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ChertNodes',
        text: 'Minecraft servers hosting',
        src: chertNodes,
        links: [
            {href: "#", children: "Live <~>"},
            {href: "#", children: "Cached >=", color: theme.colors.primaryLightText, outlineColor: theme.colors.primaryOutline, mWidth: "120px"},
        ],
    },
    protectX: {
        software: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ProtectX',
        text: 'Discord anti-crash bot',
        src: protectX,
        links: [
            {href: "#", children: "Live <~>"},
        ],
    },
    kahoot: {
        software: ['CSS', 'Express', 'Node.js'],
        title: 'Kahoot Answers Viewer',
        text: 'Get answers to your kahoot quiz',
        src: kahoot,
        links: [
            {href: "#", children: "Live <~>"},
        ],
    },
    kotikBot: {
        software: ['HTML', 'CSS', 'JS'],
        title: 'Kotik Bot',
        text: 'Multi-functional discord bot',
        src: kotikBot,
        links: [
            {href: "#", children: "Live <~>"},
        ],
    },
    portfolio: {
        software: ['Vue', 'TS', 'Less'],
        title: 'Portfolio',
        text: 'You’re using it rn',
        src: portfolio,
        links: [
            {href: "#", children: "Github <~>", mWidth: "128px"},
        ],
    },
}

export const smallProjectsData = {
    botBoilerplate: {
        title: 'Bot boilerplate',
        software: ['Discord.js', 'TS', 'JS'],
        text: 'Start creating scalable discord.js bot with typescript in seconds',
        links: [
            {href: "#", children: "Github <~>", mWidth: "128px"},
        ]
    },
    myBlog: {
        title: 'My Blog',
        software: ['VUE', 'CSS', 'JS'],
        text: 'Front-end of my future blog website written in vue',
        links: [
            {href: "#", children: "Github <~>", mWidth: "128px"},
        ]
    },
    chessProlog: {
        title: 'Chess pro',
        software: ['Figma'],
        text: 'Figma landing page about service for viewing chess tournaments',
        links: [
            {href: "#", children: "Figma <~>", mWidth: "120px"},
        ]
    },
    crashProtectWebsite: {
        title: 'Crash protect website',
        software: ['Figma'],
        text: 'Figma template for website about anti-raid, anti-crash discord bot',
        links: [
            {href: "#", children: "Figma <~>", mWidth: "1280px"},
        ]
    },
    cssExperiments: {
        title: 'CSS expirements',
        software: ['HTML', 'CSS'],
        text: 'Collection of my different little projects in css',
        links: [
            {href: "#", children: "Live <~>", mWidth: "110px"},
        ]
    },
    webDevNvimConfig: {
        title: 'Web Dev nvim config',
        software: ['Lua', 'NeoVim'],
        text: 'Config for neovim perfect for web developer',
        links: [
            {href: "#", children: "Github <~>", mWidth: "128px"},
        ]
    },
    ooku: {
        title: 'Ooku',
        software: ['Python', 'Quart', 'HTML'],
        text: 'Simple link shortener with auth',
        links: [
            {href: "#", children: "Live <~>", mWidth: "110px"},
        ]
    },
    schoolWebsite: {
        title: 'School website',
        software: ['Figma'],
        text: 'Figma template website for my school',
        links: [
            {href: "#", children: "Figma <~>", mWidth: "128px"},
        ]
    },
}