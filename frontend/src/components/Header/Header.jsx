import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/Logo_noir.png';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projects' },
  { name: 'À-propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo du site" />
        </NavLink>
      </div>

      <nav className="nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
