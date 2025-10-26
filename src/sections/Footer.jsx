import { socialLinks, personalInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="mailto:ashimidoyin@yahoo.com" className="flex flex-col justify-center">
          <p>Send a mail</p>
        </a>
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              className="icon" 
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;