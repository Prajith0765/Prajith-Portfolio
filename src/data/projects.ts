import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Responsive Academic Portal ",
    description: "This MERN-based Responsive Academic Portal offers secure, role-based access for staff, parents, and students. Users authenticate via OTP sent to their registered mobile number to access attendance, grades, or relevant data. With strong backend security and data protection, the portal ensures safe, efficient communication within educational institutions.",

    image: "https://www.smartcampuses.com/wp-content/uploads/2022/10/school-software.png",
    githubLink: "https://github.com/Prajith0765/Responsive-Academic-Portal",
    //demoLink: ,
    technologies: ["React","Tailwind CSS", "Node.js", "Express", "MongoDB", "FireBase", "JWT"]
  },
  {
    id: 2,
    title: "TamilNadu Heritage Explorer",
    description: "The TamilNadu Heritage Explorer is a digital platform to explore, document, and preserve the state's rich cultural legacy. Focusing on temples, monuments, and traditional art forms, it offers an interactive web interface to search by dynasty, era, or art form. With a structured database, visual content, and cultural reports, it serves as an educational and travel planning tool for researchers, students, and heritage enthusiasts.",
    image: "https://tse3.mm.bing.net/th/id/OIP.foFa0wdFp-YVYKdIurcqsQHaEa?rs=1&pid=ImgDetMain",
    githubLink: "https://github.com/Prajith0765/TamilNadu-Explorer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "API", "RAG", "NLP"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience. Features responsive design, interactive elements, and contact form.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/Prajith0765/Prajith-Portfolio",
    demoLink: "https://yourportfolio.com",
    technologies: ["React", "Tailwind CSS", "Animation"]
  },
  {
    id: 4,
    title: "Lighting Lamp",
    description: "This project demonstrates a simple lamp lighting effect using HTML and CSS. It visually represents a lamp that can switch between 'on' and 'off' states using styled elements and animations. The project showcases fundamental front-end skills, focusing on layout, styling, and basic interactivity.",
    image: "https://cdn.dribbble.com/users/2064121/screenshots/5870025/pendant_lamp_thumb_2x_4x.jpg?resize=1000x750&vertical=center",
    githubLink: "https://github.com/Prajith0765/Lighting-Lamp-using-HTML-CSS",
    demoLink: "https://prajith0765.github.io/Lighting-Lamp-using-HTML-CSS/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  
];