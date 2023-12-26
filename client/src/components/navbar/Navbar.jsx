import { Link } from 'react-router-dom';
import './navbar.css';
import { FaRegUser } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav__logo">
            <div className="nav__logo-text">
              <span>Psí</span>
              <span>věcičky</span>
            </div>
          </Link>

          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <FaRegUser />
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/write" className="nav__link">
                Přidej inzerát
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
