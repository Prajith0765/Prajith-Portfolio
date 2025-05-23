import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ContactLink from '../components/ContactLink';
import { Github, Linkedin, Mail, Instagram, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // EmailJS send email
    emailjs.send(
      'service_8u19rlj', // Replace with your EmailJS Service ID
      'template_ybp6rtf', // Replace with your EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'j1XrlZ-Cbue5cA6on' // Replace with your EmailJS User ID
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a question or want to work together? Reach out through any of these platforms or fill out the contact form below."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ContactLink 
              platform="GitHub" 
              username="Prajith0765" 
              link="https://github.com/Prajith0765" 
              icon={Github} 
            />
            <ContactLink 
              platform="LinkedIn" 
              username="prajith0765" 
              link="https://www.linkedin.com/in/prajith0765/" 
              icon={Linkedin} 
            />
            <ContactLink 
              platform="Email" 
              username="prajith2873@outlook.com" 
              link="mailto:prajith2873@outlook.com" 
              icon={Mail} 
            />
            <ContactLink 
              platform="Instagram" 
              username="prajith9344" 
              link="https://www.instagram.com/prajith9344/" 
              icon={Instagram} 
            />
          </div>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Send me a message</h3>
              
              {submitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                  <p className="text-foreground/70">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    className="mt-6 text-primary hover:underline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground/80">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-card/30">
        <div className="container">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-3">Looking for Job oppurtunities and freelancing</h3>
            <p className="text-foreground/70 max-w-xl mx-auto">
              I'm currently available for freelance work. If you have a project that needs my expertise, let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;