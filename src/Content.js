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

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

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
        para: "Experience in designing schemas, performing CRUD operations, and optimizing queries",
        logo: mongodb, // Assuming you have a MongoDB logo image
      },
      {
        name: "Node js",
        para: "Built REST APIs, server-side applications, and real-time applications using Node.js",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "Lorem ipsum text  dummy",
        logo: expressjs,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "MVC Architecture",
        para: "Lorem ipsum text  dummy",
        logo: mvc,
      },
      {
        name: "C Programming",
        para: "Lorem ipsum text  dummy",
        logo: c,
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
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Custom API and Deployment",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
 
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
