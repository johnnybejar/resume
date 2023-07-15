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
      <span>you can contact me by email or phone:</span>
      <div className="email">
        <img className="contact-icon" src="static/images/email.png"></img>
        <span>jbejar2001@yahoo.com</span>
      </div>
      <div className="phone">
        <img className="contact-icon" src="static/images/phone.png"></img>
        <span>9106226003 (pref. text)</span>
      </div>
      <span className="contact-message">
        you can also message me at linkedin or check out my github in the footer
        below!
      </span>
    </motion.div>
  );
}

export default Contact;
