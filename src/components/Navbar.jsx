// components/Navbar.jsx
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/add" className="btn btn-primary me-2">Add Contact</Link>
          <Link to="/demo" className="btn btn-primary">Check the Context in action</Link>
        </div>
      </div>
    </nav>
  );
};