import './Footer.scss';
import Logo from '../../assets/Logo_noir.png';
import { Mail, Linkedin, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Logo Samuel" />
      </div>

      <div className="footer-links">
        <a href="mailto:samuelherbin26@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/SamHbn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
      </div>

      <div className="footer-copy">
        © 2025 Samuel Herbin – Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
