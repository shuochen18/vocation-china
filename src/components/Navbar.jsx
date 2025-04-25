import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Vocation China</Link>
        {/* <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tour-types">Tour Types</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/routes">Routes</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar; 