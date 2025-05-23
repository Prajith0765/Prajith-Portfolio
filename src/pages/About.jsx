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
                Hello! I'm <span className="text-primary font-medium">Prajith</span>,  a dedicated full stack developer with a strong foundation in Computer Science and a passion for building responsive, efficient, and user-friendly web applications.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6">
                Currently in my final year of a Bachelor's degree in Computer Science and Engineering, I’ve gained hands-on experience through academic projects and personal initiatives. My work blends front-end creativity with back-end logic, using modern technologies to craft seamless digital experiences.
              </p>
              
              <p className="text-lg text-foreground/80">
                Beyond coding, I enjoy exploring emerging tools in web development, collaborating on innovative ideas, and staying active to maintain a balanced and inspired lifestyle.
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
                    src="public/itsme.jpg" 
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
            title="Education" 
            subtitle="My academic background."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
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
                    degree: "Bachelors in Computer Science and Engineering",
                    institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
                    period: "2022 - 2026",
                    description: "Currently pursuing the final year of a Bachelor's degree in Computer Science and Engineering. Passionate about Full Stack Development, with hands-on experience in building dynamic web applications."
                  },
                  {
                    degree: "Higher Secondary School (HSC)",
                    institution: "Bethlahem Matric Higher Secondary School, KanyaKumari",
                    period: "2022",
                    description: "Completed higher education with a strong academic record, securing 83% overall."
                  },
                  {
                    degree: "Secondary School (SSLC)",
                    institution: "Bethlahem Matric Higher Secondary School, KanyaKumari",
                    period: "2020",
                    description: "Completed secondary education with a strong academic record, securing 89% overall."
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