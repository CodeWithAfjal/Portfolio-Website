import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Eduction

import geclogo from "./assets/education_logo/gec_logo.png";
import mpclogo from "./assets/education_logo/mpc_logo.jpeg";
import kpslogo from "./assets/education_logo/kps_logo.jpeg";

//Projects

import plantswap from "./assets/work_logo/Plantswap.png";
import worldatlas from "./assets/work_logo/worldatlas.png";
import nagrik from "./assets/work_logo/nagrik.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: geclogo,
      school: "Gandhi National College",
      date: "Sept 2022 - June 2025",
      desc: "I have completed my Bachelors degree (BCA) in Computer Applications from Gandhi Engineering College, Bhubaneswar. During my time at GNC, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. ",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 1,
      img: mpclogo,
      school: "Maharaja Purna Chandra Higher Secondary School, Baripada",
      date: "July 2020 - May 2022",
      desc: "I completed my 12th grade from MPC Higher Secondary School, Baripada, with a focus on the Science stream. My core domain subjects included Physics, Chemistry, Mathematics, and Biology (PCMB). This combination allowed me to build a strong conceptual understanding of both mathematical and life sciences. During this period, I developed analytical thinking, problem-solving skills, and a deep interest in scientific concepts, which laid a solid foundation for my future academic and professional pursuits in the field of technology.",
      degree: "CHSE(XII)-PCMB ",
    },
    {
      id: 2,
      img: kpslogo,
      school: "Kerala Public School , Rairangpur",
      date: "  March 2020",
      desc: "I completed my Class 10 (ICSE Board) with a strong academic foundation in English, Mathematics, Science, and Social Studies. During this stage, I developed essential skills such as analytical thinking, discipline, and time management. The ICSE curriculum helped me build a solid understanding of core subjects while also enhancing my communication and writing abilities through a literature-rich syllabus.",
      degree: "ICSE-(X)",
    },
   
  ];


    export const projects = [
    {
      id: 0,
      title: "WorldAtlas-World Information",
      description:
      "Welcome to WorldAtlas, a React-based web app that provides world exploration features including country details, facts, and responsive design. ",
      image: worldatlas,
      tags: [ "React JS", "API","Axios","Netlify"],
      github: "https://github.com/CodeWithAfjal/WorldAtlas-ReactJS",
      webapp: "https://worldexplorr.netlify.app/",
    },
    {
      id: 1,
      title: "Nagrik Aur Sambhidhan",
      description:
      "It  is an interactive web-based application designed to make learning about the Indian Constitution more engaging and fun. By integrating gamification techniques such as quizzes, challenges, and progress tracking, this platform encourages users to explore constitutional concepts in an enjoyable way.",
      image: nagrik,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CodeWithAfjal/Nagrik-Aur-Sambhidhan",
      webapp: "https://nagrikaursambhidhaan.netlify.app/",
    },
    {
      id: 2,
      title: "PlantSwap",
      description:
       "Plant Swap is a community-driven platform for plant enthusiasts to connect, exchange plants, and share their green passion. Whether you’re looking to trade a succulent, give away cuttings, or discover a rare species, Plant Swap makes it easy and fun to grow your plant collection sustainably.",
      image: plantswap,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/CodeWithAfjal/PlantSwap",
      webapp: " https://plant-swap-ps.netlify.app/",
    },
]