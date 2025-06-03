import { certificates } from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="My Certifications" 
              subtitle="A collection of courses and certifications I've completed to expand my knowledge and skills."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map(certificate => (
              <CertificateCard
                key={certificate.id}
                title={certificate.title}
                issuer={certificate.issuer}
                date={certificate.date}
                image={certificate.image}
                link={certificate.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-3 mb-4">Continuous Learning</h2>
              <p className="text-foreground/80 mb-6">
                I believe in the power of continuous learning and staying updated with the latest technologies and best practices in the industry. These certifications represent my commitment to growth and excellence in my field.
              </p>
              <p className="text-foreground/80">
                Currently, I'm working on gaining expertise in full stack development as well as learning how to implement cloud technologies and machine learning models within full stack applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;