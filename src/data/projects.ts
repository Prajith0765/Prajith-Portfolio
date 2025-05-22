import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with React, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    demoLink: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A comprehensive task management application with drag-and-drop functionality, task categories, deadlines, and progress tracking. Features user authentication and data persistence.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/task-management",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions, forecasts, and historical data for locations worldwide. Integrates with OpenWeatherMap API.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    demoLink: "https://weather-app-demo.com",
    technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS Modules"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience. Features responsive design, interactive elements, and contact form.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/portfolio",
    demoLink: "https://yourportfolio.com",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"]
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform where users can post recipes, browse by categories, save favorites, and leave reviews. Includes user authentication and image uploads.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/recipe-platform",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS S3"]
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard that integrates with multiple platforms and displays engagement metrics, follower growth, and content performance.",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/social-dashboard",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "D3.js"]
  }
];