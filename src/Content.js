// import images
import Hero_person from "./assets/images/Hero/person.png";

import expressjs from "./assets/images/Skills/expressjs.png";
import mvc from "./assets/images/Skills/mvc.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import c from "./assets/images/Skills/c.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png" 
import project2 from "./assets/images/Projects/img2.png"
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "Ayodhya",
    LastName: "Gupta",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "MongoDB",
        para: "Skilled in schema design, CRUD operations, and query optimization.",
        logo: mongodb,
        details: [
          "Schema design with embedded & referenced documents",
          "Efficient CRUD operations",
          "Indexing & query optimization",
          "Aggregation pipelines",
          "Experience with Mongoose ODM"
        ],
      },
      {
        name: "Node.js",
        para: "Experienced in building REST APIs, backend services, and real-time apps.",
        logo: nodejs,
        details: [
          "Developing RESTful APIs",
          "Authentication & authorization",
          "Real-time apps using WebSockets",
          "Error handling & middleware",
          "Integrating databases & external APIs"
        ],
      },
      {
        name: "Express.js",
        para: "Proficient in creating scalable server-side applications with Express.js.",
        logo: expressjs,
        details: [
          "Routing & middleware setup",
          "REST API development",
          "Error handling & validation",
          "Template engines & APIs",
          "Session & cookies handling"
        ],
      },
      {
        name: "React.js",
        para: "Adept at developing dynamic, responsive, and component-based UIs.",
        logo: reactjs,
        details: [
          "Component-based architecture",
          "State & props management",
          "React hooks (useState, useEffect, etc.)",
          "Responsive UI with Tailwind/Bootstrap",
          "Integration with APIs"
        ],
      },
      {
        name: "MVC Architecture",
        para: "Strong understanding of organizing applications using MVC principles.",
        logo: mvc,
        details: [
          "Separating concerns into Model, View, Controller",
          "Scalable application structure",
          "Improved maintainability",
          "Reusability of components",
          "Integration with frameworks"
        ],
      },
      {
        name: "C Programming",
        para: "Knowledgeable in writing efficient, structured, and low-level programs.",
        logo: c,
        details: [
          "Data structures & algorithms",
          "Memory management & pointers",
          "File handling",
          "Problem-solving with C",
          "Writing modular & reusable code"
        ],
      },
    ],
    icon: MdArrowForward,
  },
  
  
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Building responsive, dynamic, and scalable websites using modern technologies.",
        logo: services_logo1,
      },
      {
        title: "UI / UX Designing",
        para: "Designing intuitive, user-friendly, and visually appealing interfaces for better experiences.",
        logo: services_logo2,
      },
      {
        title: "Custom API & Deployment",
        para: "Developing secure APIs and deploying applications with optimized performance.",
        logo: services_logo3,
      },
    ],
  },
  

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Get Your Lawyers",
        image: project1,
        description: "A legal service platform theme designed for law firms and lawyers to showcase services, cases, and client testimonials.",
        liveLink: "https://www.getyourlawyers.com/",
      },
      {
        title: "Clif.Ai",
        image: project2,
        description: "An AI-powered SaaS theme built for tech companies, and educational platforms, featuring a modern UI, seamless integration sections, student placement support, mock interview practice, career guidance, and dedicated dashboards for both parents and students",
        liveLink: "https://www.clif.ai.com/",
      },
      {
        title: "Exo Ape",
        image: project3,
        description: "Exo Ape is one of exploration, creativity and curiosity. We partner with brands and businesses that create exceptional experiences where people live, work and unwind",
        liveLink: "https://eco-app-react.vercel.app/",
      },
    ],
  },
  
 
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    para: "I am a Full Stack MERN Developer with 2 years of hands-on experience in building scalable web applications. Skilled in React, Node.js, Express, and MongoDB, I specialize in creating dynamic, user-friendly, and efficient solutions tailored to client needs.",
    btnText: "Hire Me",
  },
  
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ayodhyaayodhya453@gmail.com",
        icon: GrMail,
        link: "NA",
      },
      {
        text: "+91 9682780369",
        icon: MdCall,
        link: "NA",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/king_of_action_raj_ag_0764/",
      },
       {
        text: "linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/ayodhya-gupta-8b5b9028a",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
