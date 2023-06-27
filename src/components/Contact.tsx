import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <span>you can contact me by email or phone:</span>
      <div className="email">
        <img className="contact-icon" src="src/assets/email.png"></img>
        <span>jbejar2001@yahoo.com</span>
      </div>
      <div className="phone">
        <img className="contact-icon" src="src/assets/phone.png"></img>
        <span>9106226003 (pref. text)</span>
      </div>
      <span className="contact-message">
        you can also message me at linkedin or check out my github in the footer
        below!
      </span>
    </div>
  );
}

export default Contact;
