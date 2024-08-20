import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span className="footer-text">Created by: John Bejar</span>
      <div className="footer-icons">
        <a href="https://github.com/johnnybejar" target="_blank">
          <img className="footer-icon" src="static/images/github.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/jbejarcs/" target="_blank">
          <img className="footer-icon" src="static/images/linkedin.png"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
