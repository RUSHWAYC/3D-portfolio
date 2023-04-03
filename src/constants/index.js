import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  bootstrap,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  attentive,
  ncr,
  grosvenor,
  smedio,
  fitclub,
  elecomm,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cypress Test Automation",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Text support/sale specialist",
    company_name: "Attentive Mobile",
    icon: attentive,
    iconBg: "#383E56",
    date: "September 2021 - Present",
    points: [
      "Providing support to customers of all of our 1000+ clients who are Shopify websites selling various products.",
      "Among the top 3 performers where speed, quality, and understanding of brands and their needs were a must.",
    ],
  },
  {
    title: "Level 1&3 tech support specialist",
    company_name: "NCR Corporation",
    icon: ncr,
    iconBg: "#E6DEDD",
    date: "September 2020 - September 2021",
    points: [
      "Taking calls as one of the top performing level 1 techs and resolving various Windows and the companies Aloha POS software issues and support.",
      "Working on tougher, more time consuming, tehcnical, in depth, and critical tickets as a level 3 technician.",
      "Creating documentation on issues and how to fix them",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Grosvenor SCM",
    icon: grosvenor,
    iconBg: "#383E56",
    date: "September 2018 - September 2020",
    points: [
      "Finding, learning, implementing, teaching new technologies and services.",
      "Automating tasks using Python and editing the database or creating useful views using PostreSQL",
      "Order fulfillment and inventory tracking.",
      "Social media handling and marketing.",
      "Website development and maintaining.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Image social media",
    description:
      "Web-based platform that allows users to post and search images, like/save, and comment on them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: smedio,
    source_code_link:
      "https://github.com/RUSHWAYC/smedio_img_sharing_soc_media",
  },
  {
    name: "The Fit Club",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fitclub,
    source_code_link: "https://github.com/RUSHWAYC/fitness-site-ReactYarn",
  },
  {
    name: "Elecomm sound",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: elecomm,
    source_code_link: "https://github.com/RUSHWAYC/ecommerce-project-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
