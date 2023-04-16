import {
    devops,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ships,
    shoes,
    nfts,
    quotes,
    shoes_project,
    ships_project,
    nfts_project,
    threejs,
    database,
    management,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web, // web.png
    },
    {
        title: "DevOps",
        icon: devops, // creator,
    },
    {
        title: "Databases",
        icon: database,
    },
    {
        title: "Project Management",
        icon: management,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Ships & Rockets using SpaceX GraphQL APi",
        company_name: "Personal",
        icon: ships,
        iconBg: "#ffffff",
        date: "Jan 2023 - Jan 2023",
        points: [
            "Developing web applications using React.js & other related technologies.",
            "Create API using SpaceX GraphQL API.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implementing UI using TainwindCss and following best practice in UX.",
            "Using CI Workflow With Github Actions.",
        ],
    },
    {
        title: "Shoes Marketplace ",
        company_name: "Personal",
        icon: shoes,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Built microservices project with ReactJS and SpringBoot..",
            "Used PostgreSQL database and create all tables using hibernate ORM..",
            "Using GraphQL to manipulate the API instead RestPI",
            "Dockernize the databse using Doker technology..",
        ],
    },
    {
        title: " Web 3 Nfts Project",
        company_name: "Personal",
        icon: nfts,
        iconBg: "#E6DEDD",
        date: " Jan 2022 - Dec 2022",
        points: [
            "Built 3.0 project for nfts using Thirdweb, ReactJS, Solidity Technologies..",
            "Creating smart contract with solidity to handle all necessary processes for the project.",
            "Implemented UI design for the interface using tailwind css framework..",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: " Quotes Project - RestAPI",
        company_name: "Personal",
        icon: quotes,
        iconBg: "#E6DEDD",
        date: " Nov 2021 - Dec 2021",
        points: [
            "Built back-end with Java and Springboot and SpringSecurity and JWT in MVC architectural pattern..",
            "Create data entities with Hibernate (JPA) and and create minimum viable product.",
            "Designed and implemented algorithm to solve all user requirements.",
        ],
    },
];

const projects = [
    {
        name: "Shoes Marketplace",
        description:
            "A shoes marketplace project built with ReactJS, GraphQL, SpringBoot and PostgreSQL and docker.",
        tags: [
            {
                name: "SpringBoot",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "Docker",
                color: "pink-text-gradient",
            },
        ],
        image: shoes_project,
        source_code_link: "https://github.com/jetroot/shoes-marketplace",
    },
    {
        name: "SpaceX Ships",
        description:
            "Web application that enables users to see the ships and that SpaceX has used to move their technologies.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "GraphQL",
                color: "green-text-gradient",
            },
            {
                name: "SpaceX APi",
                color: "pink-text-gradient",
            },
        ],
        image: ships_project,
        source_code_link: "https://github.com/jetroot/spacex_api",
    },
    {
        name: "Web 3.0 Nfts",
        description:
            "A website to show SpaceX rockets and ships, that spaceX was using in the sea to move their technologies.",
        tags: [
            {
                name: "Thirdweb",
                color: "blue-text-gradient",
            },
            {
                name: "Solidity",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: nfts_project,
        source_code_link: "https://github.com/jetroot/Web3-nft",
    },
];

export { services, technologies, experiences, projects };
