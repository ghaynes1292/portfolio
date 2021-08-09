import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import portfolioLogo from "images/hi.png";
import f1statsLogo from "images/f1.png";
import stashLogo from "images/stash.png";
import ttuLogo from "images/ttu.png";
import tylerLogo from "images/tyler-tech.jpg";
import mooveitLogo from "images/mooveit.png";

import awsLogo from "images/skills/aws.png"
import css3Logo from "images/skills/css3.png"
import digitalOceanLogo from "images/skills/digital-ocean.png"
import figmaLogo from "images/skills/figma.png"
import herokuLogo from "images/skills/heroku.png"
import html5Logo from "images/skills/html-5.png"
import javascriptLogo from "images/skills/javascript.png"
import mysqlLogo from "images/skills/mysql.png"
import nginxLogo from "images/skills/nginx.png"
import postgresqlLogo from "images/skills/postgresql.png"
import pythonLogo from "images/skills/python.png"
import railsLogo from "images/skills/rails.png"
import reactLogo from "images/skills/react.png"
import redisLogo from "images/skills/redis.png"
import rubyLogo from "images/skills/ruby.png"
import typescriptLogo from "images/skills/typescript.png"
import dockerLogo from "images/skills/docker.png"
import vscodeLogo from "images/skills/vscode.png"


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
    codeLink: "https://github.com/ghaynes1292/portfolio/",
    desc: `This site.`,
    technologies: ["react", "nextjs", "chakraui", "typescript"]
  },
  {
    id: 2,
    title: "F1Stats",
    logo: f1statsLogo,
    link: "https://eternal-entity-311516.wm.r.appspot.com/",
    desc: `Tracks stats of formula 1 drivers and constructors, with integration to the fantasy api.`,
    technologies: ["react", "material-ui", "node", "postgresql"]
  },
  {
    id: 2,
    title: "Stashr",
    logo: stashLogo,
    link: "https://stashr-f6784.web.app/",
    desc: `An application to track your stash items and value in the game Path of Exile.`,
    technologies: ["html", "css", "node", "javascript", "jquery"]
  },
];

export const companies = [
  {
    title: "Moove-it",
    alt: "Moove it",
    role: "Senior Software Engineer",
    skills: ["react", "typescript", "ruby", "rails", "node", "mysql", "javascript", ".net", "aws", "gcp"],
    period: "2016 - Present",
    logo: mooveitLogo,
  },
  {
    title: "Tyler Technologies",
    alt: "Tyler Technology",
    role: "Software development intern",
    skills: ["html", "css", "mysql", "javascript", "angular", ".net"],
    period: "May 2015 - Aug 2015",
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

export const skills = [
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: reactLogo
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascriptLogo
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescriptLogo
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5Logo
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3Logo
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgresqlLogo
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysqlLogo
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redisLogo
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: pythonLogo
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: rubyLogo
  },
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: railsLogo
  },
  {
    name: "Docker",
    description: "Application containers",
    link: "https://www.docker.com//",
    type: "devops",
    image: dockerLogo
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: herokuLogo
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: awsLogo
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: digitalOceanLogo
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginxLogo
  },
  {
    name: "Visual Studio Code",
    description: "Code editor",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscodeLogo
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figmaLogo
  }
];



export default siteConfig;