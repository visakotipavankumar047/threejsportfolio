export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://livedocs-iota.vercel.app/sign-in',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
          'Its my UI/UX design for an App',
        href: 'https://www.figma.com/design/TgBGtkcw0aJE6AuRNqt3ib/Travel-App?node-id=0-1&t=6AE30N2qL1CfWewA-1',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
          backgroundColor: '#60f5a1',
          background:
            'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
          border: '0.2px solid rgba(208, 213, 221, 1)',
          boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
          {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
          },
          {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
          },
          {
            id: 3,
            name: 'TypeScript',
            path: '/assets/typescript.png',
          },
          {
            id: 4,
            name: 'Framer Motion',
            path: '/assets/framer.png',
          },
        ],
      },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Soft Network Solution',
        pos: 'Front-end Developer',
        duration: '2023',
        title: "Make Websites using Reactjs , Nextjs and ViteReact.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Gabbian',
        pos: 'UI/UX Designer',
        duration: '2024',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Radcliffe Group of Schools',
        pos: 'Computer Science and Robotics Teacher',
        duration: '2023-2024',
        title: "I been Teaching Students computer science , Programming and Robotics ",
        icon: '/assets/notion.svg',
        animation: 'salute',
      },
];