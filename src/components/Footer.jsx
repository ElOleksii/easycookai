import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import facebookIcon from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <a href="#" className="footer-text">
        easycookai 2024
      </a>
      <ul className="footer-icons">
        <li className="footer-icon">
          <a target="_blank" href="https://www.linkedin.com/company/105535119/">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li className="footer-icon">
          <a href="">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li className="footer-icon">
          <a href="">
            <img src={facebookIcon} alt="facebookIcon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
