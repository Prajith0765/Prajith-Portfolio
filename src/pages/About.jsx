import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TechStack from '../components/TechStack';
import { technologies } from '../data/technologies';

const About = () => {
  return (
    <div className="pt-20">
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 mb-6">
                About <span className="text-primary">Me</span>
              </h1>
              
              <p className="text-lg text-foreground/80 mb-6">
                Hello! I'm <span className="text-primary font-medium">Prajith</span>, a passionate web developer and designer with a keen eye for creating beautiful, functional, and user-centered digital experiences.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6">
                With 5+ years of experience in the field, I've worked on a variety of projects ranging from small business websites to complex web applications. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally well.
              </p>
              
              <p className="text-lg text-foreground/80">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Abstract background shapes */}
                <div className="absolute top-[-30px] right-[-30px] w-3/4 h-3/4 bg-secondary/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-[-20px] left-[-20px] w-2/3 h-2/3 bg-primary/20 rounded-full filter blur-3xl"></div>
                
                {/* Profile image with border */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-card shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay for integration with background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/40 mix-blend-overlay"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 w-[30px] h-[60%] bg-accent/30 rounded-full filter blur-md"></div>
                <div className="absolute bottom-[-15px] right-1/4 transform w-[40%] h-[10px] bg-primary/40 rounded-full filter blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-card/30">
        <div className="container">
          <SectionHeading 
            title="My Skills" 
            subtitle="I've worked with a range of technologies in the web development world, from front-end to back-end."
          />
          
          <TechStack technologies={technologies} />
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Experience & Education" 
            subtitle="My professional journey and academic background."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-2">
                  W
                </span>
                Work Experience
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:w-[2px] before:bg-border before:ml-4 before:-translate-x-1/2">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "Tech Solutions Inc.",
                    period: "2021 - Present",
                    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies."
                  },
                  {
                    title: "Web Developer",
                    company: "Digital Agency",
                    period: "2018 - 2021",
                    description: "Developed responsive websites and applications for clients across various industries, focusing on performance and user experience."
                  },
                  {
                    title: "Junior Developer",
                    company: "StartUp Hub",
                    period: "2016 - 2018",
                    description: "Collaborated with a team to build and maintain web applications, gained expertise in front-end frameworks and responsive design."
                  }
                ].map((job, index) => (
                  <div 
                    key={index} 
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 bg-card border-4 border-primary rounded-full z-10"></div>
                    <h4 className="text-lg font-medium">{job.title}</h4>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-foreground/70 mb-2">{job.period}</p>
                    <p className="text-foreground/80">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mr-2">
                  E
                </span>
                Education
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:w-[2px] before:bg-border before:ml-4 before:-translate-x-1/2">
                {[
                  {
                    degree: "Master's in Computer Science",
                    institution: "Tech University",
                    period: "2014 - 2016",
                    description: "Specialized in Web Technologies and Human-Computer Interaction, with a focus on modern web application architecture."
                  },
                  {
                    degree: "Bachelor's in Information Technology",
                    institution: "State University",
                    period: "2010 - 2014",
                    description: "Fundamental education in programming, database systems, and software development, with honors in web development."
                  },
                  {
                    degree: "Web Development Bootcamp",
                    institution: "Code Academy",
                    period: "2013",
                    description: "Intensive training in modern web development technologies and practices, including React, Node.js, and responsive design."
                  }
                ].map((edu, index) => (
                  <div 
                    key={index} 
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 bg-card border-4 border-secondary rounded-full z-10"></div>
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-secondary font-medium">{edu.institution}</p>
                    <p className="text-sm text-foreground/70 mb-2">{edu.period}</p>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;