import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span className="footer-text">created by john bejar</span>
      <div className="icons">
        <a href="https://github.com/johnnybejar" target="_blank">
          <img className="footer-icon" src="src/assets/github.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/jbejarcs/" target="_blank">
          <img className="footer-icon" src="src/assets/linkedin.png"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;