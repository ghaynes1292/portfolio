import {
  FaGithub
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import portfolioLogo from "./public/hi.png";
import f1statsLogo from "./public/f1.png";
import stashLogo from "./public/stash.png";
import ttuLogo from "./public/ttu.png";
import tylerLogo from "./public/tyler-tech.jpg";
import mooveitLogo from "./public/mooveit.png";

const siteConfig = {
  copyright: `© ${new Date().getFullYear()} Gavin Haynes. All Rights Reserved.`,
  author: {
    name: "Gavin Haynes",
    accounts: [
      {
        url: "https://github.com/ghaynes1292",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "mailto:gavin@gavinh.net",
        label: "Gavin Haynes",
        type: "gray",
        icon: <FiMail />
      }
    ]
  },
  title: 'Gavin Haynes - Full Stack Developer',
  keywords: 'web development, web, design, software engineering',
  description: 'Software Engineer and Web Design enthusiast.',

};

export const projectsList = [
  {
    id: 1,
    title: "Portfolio",
    logo: portfolioLogo,
    link: "/",
    desc: `This site you are reading this on right now.`,
    technologies: ["react", "nextjs", "chakraui", "typescript"]
  },
  {
    id: 2,
    title: "F1Stats",
    logo: f1statsLogo,
    link: "https://google.com",
    desc: `An application to track the stats and value of drivers during a formula 1 season. Integration with the fantasy formula 1 application for monetary values.`,
    technologies: ["react", "material-ui", "express", "postgresql"]
  },
  {
    id: 2,
    title: "Stashr",
    logo: stashLogo,
    link: "https://stashr-f6784.web.app/",
    desc: `An application to track your stash items and value in the game Path of Exile.`,
    technologies: ["react", "material-ui", "express", "postgresql"]
  },
];

export const companies = [
  {
    title: "Moove-it",
    alt: "Moove it",
    role: "Senior Software Engineer",
    skills: ["javascript", "react", "typescript", "node", "aws", "gcp", "ruby", "rails"],
    period: "2016 - Present",
    logo: mooveitLogo,
  },
  {
    title: "Tyler Technologies",
    alt: "Tyler Technology",
    role: "Software development intern",
    skills: ["HTML", "CSS", "javascript", "angular", ".net", "mysql"],
    period: "May 2015 - August 2015",
    logo: tylerLogo,
  },
];

export const education = [  {
  short_title: "Texas Tech",
  title: "Texas Tech University",
  alt: "Texas Tech",
  role: "Bachelor's Degree in Computer Engineering",
  skills: ["project management", "web development", "data structures", "algorithms", "math minor"],
  period: "2011 - 2016",
  startingYear: "2011",
  logo: ttuLogo,
}];


export default siteConfig;