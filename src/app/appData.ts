import { theme } from '../styles/Theme.tsx'
import portfolio from '../assets/images/section-images/projects/project-1.svg'
import kotikBot from '../assets/images/section-images/projects/project-2.svg'
import kahoot from '../assets/images/section-images/projects/project-3.svg'
import protectX from '../assets/images/section-images/projects/project-4.svg'
import chertNodes from '../assets/images/section-images/projects/project-5.svg'

export const contentData = {
  homePage: {
    main: {
      title: 'Gleb is a <span>front-end developer</span>',
      paragraph: 'He crafts responsive websites where technologies meet creativity',
      contactBtn: 'Contact me!!',
      cvBtn: 'Download CV',
      status: 'Currently working on <span>Portfolio</span>',
    },
    testimony: {
      quote: 'With great power comes great electricity bill',
      cite: '- Dr. Who',
    },
    projects: {
      allProjectsBtn: 'View all ~~>',
      imageHoverBtn: 'View',
    },
    aboutMe: {
      paragraphs: {
        1: 'Hello, I’m Gleb!',
        2: 'I’m a front-end developer based in Minsk, Belarus. I specialize in creating responsive websites from scratch and transforming them into modern, user-friendly web experiences.',
        3: 'For over two years, I’ve been passionate about turning my creativity and knowledge into websites. I’ve been helping various clients establish their online presence. I always try to learn about the latest technologies and frameworks.',
      },
      readMoreBtn: 'Read more ->',
    },
    contacts: {
      paragraph:
        'I’m interested in working on product development opportunities. However, if you have other requests or questions, don’t hesitate to contact me.',
      readMoreBtn: 'Read more ->',
      box: 'Message me here',
      socials: {
        iconIds: ['discord', 'outlook'],
        iconsTitles: ['discord.me', 'gleb@gleb.me'],
      },
    },
    footer: {
      socialsLeft: {
        iconIds: ['email'],
        iconsTitles: ['gleb.kanin@gmail.com'],
      },
      span: 'Front-end developer',
      mediaHeader: 'Media',
      socialsRight: {
        iconIds: ['linkedIn', 'git', 'telegram'],
      },
      copyright: '© Copyright 2025. Made by Gleb',
    },
  },

  aboutMePage: {
    myFunFacts: [
      { fact: 'I like winter more than summer' },
      { fact: 'I often bike with my friends' },
      { fact: 'I like <span>pizza</span> and <span>pasta</span>' },
      { fact: 'I was in <span>Egypt</span>, <span>Poland</span> and <span>Turkey</span>' },
      { fact: 'My favorite movie is <span>The Green Mile</span>' },
      { fact: 'I am still in school' },
      { fact: 'I don’t have any siblings' },
    ],
  },

  contactPage: {
    contacts: {
      supportMe: 'Support me here',
      walletTitle: 'USDT (TRC20)',
      walletToCopy: 'TPNzHvDZ9oxoR5NQWHqq4P9XjBCFJjanAg',
      message: 'Message me here',
      socials: {
        iconIds: ['discord', 'outlook'],
        iconsTitles: ['discord.me', 'gleb@gleb-dev.ml'],
      },
    },
    allMedia: {
      socials: {
        iconIds: ['git', 'linkedIn', 'telegram', 'discord', 'outlook'],
        iconsTitles: ['KaninGleb', 'GlebKanin', '@QuietGleb', 'myDiscord', 'gleb.kanin@outlook.com'],
      },
    },
  },

  modal: {
    header: 'Contact me',
    name: 'Name',
    email: 'Email',
    title: 'Title',
    message: 'Message',
    sendBtn: 'Send message',
  },
  logo: 'Gleb',
  mediaSocials: ['linkedIn', 'git', 'telegram'],
}

const linksData = {
  myGitHub: 'https://github.com/KaninGleb',
  myFigma: 'https://www.figma.com/',
  myEmail: 'https://mail.google.com/',
  myTelegram: 'https://t.me/QuietGleb',
  myOutlook: 'mailto:gleb.kanin@gmail.com',
  myDiscord: 'https://discord.com/users/351200394971578371',
  myLinkedIn: 'https://www.linkedin.com/in/gleb-kanin-921730324/',
}

export const socialData = [
  { id: 'git', href: linksData.myGitHub, areaLabel: 'Link to my GitHub' },
  { id: 'figma', href: linksData.myFigma, areaLabel: 'Link to my Figma' },
  { id: 'email', href: linksData.myEmail, areaLabel: 'Link to my Gmail' },
  { id: 'outlook', href: linksData.myOutlook, areaLabel: 'Link to my Outlook' },
  { id: 'telegram', href: linksData.myTelegram, areaLabel: 'Link to my Telegram' },
  { id: 'discord', href: linksData.myDiscord, areaLabel: 'Link to my Discord' },
  { id: 'linkedIn', href: linksData.myLinkedIn, areaLabel: 'Link to my myLinkedIn' },
]

export const headerLinks = [
  { name: 'home', id: '' },
  { name: 'projects', id: 'projects' },
  { name: 'skills', id: 'skills' },
  { name: 'about-me', id: 'about-me' },
  { name: 'contacts', id: 'contacts' },
]

export const routerLinksData = [
  { symbol: '#', name: 'home', id: '' },
  { symbol: '#', name: 'projects', id: 'projects' },
  { symbol: '#', name: 'about-me', id: 'about-me' },
  { symbol: '#', name: 'contacts', id: 'contacts' },
]

export const sectionsTitlesData = {
  homePage: {
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
  },

  projectsPage: {
    allProjects: {
      id: 'projects',
      name: 'complete-apps',
      symbol: '#',
    },
    headerProjects: {
      name: 'projects',
      symbol: '/',
      description: 'List of my projects',
    },
    smallProjects: {
      name: 'small-projects',
      symbol: '#',
    },
  },

  aboutMePage: {
    aboutMe: {
      name: 'about-me',
      symbol: '/',
      description: 'Who am i?',
    },
    skills: {
      name: 'skills',
      symbol: '#',
    },
    myFunFacts: {
      name: 'my-fun-facts',
      symbol: '#',
    },
  },

  contactsPage: {
    contacts: {
      name: 'contacts',
      symbol: '/',
      description: 'Who am i?',
    },
    allMedia: {
      name: 'all-Media',
      symbol: '#',
    },
  },
}

export const projectsData = {
  chertNodes: {
    imageLink: linksData.myGitHub,
    software: ['HTML', 'SCSS', 'Python', 'Flask'],
    title: 'ChertNodes',
    text: 'Minecraft servers hosting',
    src: chertNodes,
    links: [
      { href: linksData.myGitHub, children: 'Live <~>' },
      {
        href: linksData.myGitHub,
        children: 'Cached >=',
        color: theme.colors.primaryLightText,
        outlineColor: theme.colors.primaryOutline,
        mWidth: '120px',
      },
    ],
  },
  protectX: {
    imageLink: linksData.myGitHub,
    software: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'],
    title: 'ProtectX',
    text: 'Discord anti-crash bot',
    src: protectX,
    links: [{ href: linksData.myGitHub, children: 'Live <~>' }],
  },
  kahoot: {
    imageLink: linksData.myGitHub,
    software: ['CSS', 'Express', 'Node.js'],
    title: 'Kahoot Answers Viewer',
    text: 'Get answers to your kahoot quiz',
    src: kahoot,
    links: [{ href: linksData.myGitHub, children: 'Live <~>' }],
  },
  kotikBot: {
    imageLink: linksData.myGitHub,
    software: ['HTML', 'CSS', 'JS'],
    title: 'Kotik Bot',
    text: 'Multi-functional discord bot',
    src: kotikBot,
    links: [{ href: linksData.myGitHub, children: 'Live <~>' }],
  },
  portfolio: {
    imageLink: linksData.myGitHub,
    software: ['Vue', 'TS', 'Less'],
    title: 'Portfolio',
    text: 'You’re using it rn',
    src: portfolio,
    links: [{ href: linksData.myGitHub, children: 'Github <~>', mWidth: '128px' }],
  },
}

export const smallProjectsData = {
  botBoilerplate: {
    title: 'Bot boilerplate',
    software: ['Discord.js', 'TS', 'JS'],
    text: 'Start creating scalable discord.js bot with typescript in seconds',
    links: [{ href: linksData.myGitHub, children: 'Github <~>', mWidth: '128px' }],
  },
  myBlog: {
    title: 'My Blog',
    software: ['VUE', 'CSS', 'JS'],
    text: 'Front-end of my future blog website written in vue',
    links: [{ href: linksData.myGitHub, children: 'Github <~>', mWidth: '128px' }],
  },
  chessProlog: {
    title: 'Chess pro',
    software: ['Figma'],
    text: 'Figma landing page about service for viewing chess tournaments',
    links: [{ href: linksData.myGitHub, children: 'Figma <~>', mWidth: '120px' }],
  },
  crashProtectWebsite: {
    title: 'Crash protect website',
    software: ['Figma'],
    text: 'Figma template for website about anti-raid, anti-crash discord bot',
    links: [{ href: linksData.myGitHub, children: 'Figma <~>', mWidth: '1280px' }],
  },
  cssExperiments: {
    title: 'CSS expirements',
    software: ['HTML', 'CSS'],
    text: 'Collection of my different little projects in css',
    links: [{ href: linksData.myGitHub, children: 'Live <~>', mWidth: '110px' }],
  },
  webDevNvimConfig: {
    title: 'Web Dev nvim config',
    software: ['Lua', 'NeoVim'],
    text: 'Config for neovim perfect for web developer',
    links: [{ href: linksData.myGitHub, children: 'Github <~>', mWidth: '128px' }],
  },
  ooku: {
    title: 'Ooku',
    software: ['Python', 'Quart', 'HTML'],
    text: 'Simple link shortener with auth',
    links: [{ href: linksData.myGitHub, children: 'Live <~>', mWidth: '110px' }],
  },
  schoolWebsite: {
    title: 'School website',
    software: ['Figma'],
    text: 'Figma template website for my school',
    links: [{ href: linksData.myGitHub, children: 'Figma <~>', mWidth: '128px' }],
  },
}

export const skillsData = [
  { order: 5, title: 'Languages', description: ['TypeScript', 'Lua', 'Python', 'JavaScript'] },
  { order: 3, title: 'Databases', description: ['SQLite', 'PostgreSQL', 'Mongo'] },
  {
    order: 1,
    title: 'Tools',
    maxWidth: '196px',
    description: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
  },
  { order: 4, title: 'Other', description: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'] },
  {
    order: 2,
    title: 'Frameworks',
    maxWidth: '196px',
    description: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
  },
]
