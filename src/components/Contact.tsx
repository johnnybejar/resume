import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h4>contact</h4>
      <span>you can contact me by phone or email:</span>
      <div className="email">
        <img className="contact-icon" src="src/assets/email.png"></img>
        <span>jbejar2001@yahoo.com</span>
      </div>
      <div className="phone">
        <img className="contact-icon" src="src/assets/phone.png"></img>
        <span>9106226003 (pref. text)</span>
      </div>
    </div>
  );
}

export default Contact;
