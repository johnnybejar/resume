import { motion } from "framer-motion";
import "../styles/Contact.css";

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="email">
        <img className="contact-icon" src="static/images/email.png"></img>
        <span>jbejar2001@yahoo.com</span>
      </div>
      <div className="phone">
        <img className="contact-icon" src="static/images/phone.png"></img>
        <span>9106226003 (pref. text)</span>
      </div>
      <span className="contact-message">
        Check out my 
        <a href="https://github.com/johnnybejar" className="external-link">GitHub</a> 
        for more of my projects or connect with me on 
        <a href="https://www.linkedin.com/in/jbejarcs/" className="external-link">LinkedIn!</a>
      </span>
    </motion.div>
  );
}

export default Contact;
