import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PortfolioImg from "@/public/portfolio_ss.png";
import HelperLand from "@/public/Helperland.png";
import CBIR from "@/public/CBIR.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Contract Software Engineer @ Shipd",
    location: "Remote, Canada",
    description:
      "I provide precise and currated data to train LLMs by creating schemas and relations for Database, solving SQL queries, resolving React & Tailwind UI issues and build better generative developer tools",
    icon: React.createElement(CgWorkAlt),
    date: "04/2024 - Present",
  },
  {
    title: "Master's in Computer Science @ Concordia ",
    location: "Montreal, Canada",
    description:
      "Coursework Includes: Programming & Problem Solving, Applied Artificial Intelligence, Distriburted Systems. Participated in Morgan Stanley Code to give Hackathon, @HACK organized by Concordia",
    icon: React.createElement(LuGraduationCap),
    date: "09/2023-Present",
  },
  {
    title: "Software Engineer @ TatvaSoft",
    location: "Ahmedabad, India",
    description:
      "I worked as a full-stack developer using React.js, Node.js, PostgreSQL. Integrated 3rd party payment gateways, Used webhooks for automated notification, Implemented cronjob to regularly sync database with backup",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 06/2023",
  },
  {
    title: "Software Engineer Intern @ TatvaSoft",
    location: "Ahmedabad, India",
    description:
      "I worked as a back-end developer using Node.js, Express and build APIs and managed database operations for a New York based Life Science technology company.I also upskilled myself to become full stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 - 06/2022",
  },
  {
    title: "Bachelor's of Engineering @ LDRP-ITR",
    location: "Gandhinagar, India",
    description:
      "University Topper with 9.89 GPA, received MYSY scholarship for Academic Excellence. Lead team in SSIP (Student Startup & Innovation Policy) Hackathon, part of college techFest organizer team",
    icon: React.createElement(LuGraduationCap),
    date: "08/2018-04/2022",
  },
] as const;

export const projectsData = [
  {
    title: "HelperLand",
    description:
      "A household cleaning service providing website that connects user and service provider mapped according to area postal code",
    tags: ["React", "Node.js", "PostgreSQL", "Sequelize ORM", "Bootstrap", "TypeScript", "Swagger UI"],
    imageUrl: HelperLand,
  },
  {
    title: "Content Based Image Search Engine",
    description:
      "Used a CNN Models to filter output images based on RGB color schemes, gradients, and curves with over 98% accuracy",
    tags: ["Python","Keras","VGG-16" , "Tensorflow", "PIL"],
    imageUrl: CBIR,
  },
  {
    title: "My Portfolio",
    description:
      "A fully responsive, user interactive portfolio Website hosted using vercel. Implement email service using resend in contact form",
    tags: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind", "Resend", "React Email"],
    imageUrl: PortfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
