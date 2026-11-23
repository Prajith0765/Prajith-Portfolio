import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Responsive Academic Portal ",
    description: "This MERN-based Responsive Academic Portal offers secure, role-based access for staff, parents, and students. Users authenticate via OTP sent to their registered mobile number to access attendance, grades, or relevant data. With strong backend security and data protection, the portal ensures safe, efficient communication within educational institutions.",

    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/Prajith0765/Responsive-Academic-Portal",
    //demoLink: ,
    technologies: ["React","Tailwind CSS", "Node.js", "Express", "MongoDB", "FireBase", "JWT"]
  },
  {
    id: 2,
    title: "TamilNadu Heritage Explorer",
    description: "The TamilNadu Heritage Explorer is a digital platform to explore, document, and preserve the state's rich cultural legacy. Focusing on temples, monuments, and traditional art forms, it offers an interactive web interface to search by dynasty, era, or art form. With a structured database, visual content, and cultural reports, it serves as an educational and travel planning tool for researchers, students, and heritage enthusiasts.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/Prajith0765/TamilNadu-Explorer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "API", "RAG", "NLP"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience. Features responsive design, interactive elements, and contact form.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/Prajith0765/Prajith-Portfolio",
    demoLink: "https://yourportfolio.com",
    technologies: ["React", "Tailwind CSS", "Animation"]
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "This Inventory Management System using Angular, .NET Framework, SQL Server. It performs the CRED operations of handling Product Data in a Inventory with the functionality of import and export product data in a excel sheet. The project showcases fundamental front-end skills, focusing on functionality, layout, and basic interactivity.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    githubLink: {
    frontend: "https://github.com/Prajith0765/Inventory_Management_Frontend",
    backend: "https://github.com/Prajith0765/Product_Inventory_Management_Backend"
  },
    technologies: ["Angular", ".NET Framework", "SQL Server", "Onion Architecture"]
  },
  
  {
    id: 6,
    title: "Hospital Management System",
    description: "This Hospital Management System using Angular, .NET Framework, SQL Server. It performs the CRED operations of handling Patient Details in a Hospital. The project showcases fundamental front-end skills, focusing on functionality, layout, and basic interactivity.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80",
    githubLink: {
    frontend: "https://github.com/Prajith0765/Hospital_Management_Frontend",
    backend: "https://github.com/Prajith0765/Hospital_Management_Backend"
  },
    technologies: ["Angular", ".NET Framework", "SQL Server"]
  },

];