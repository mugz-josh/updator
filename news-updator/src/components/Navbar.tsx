
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

interface NavbarProps {
  isSignedIn: boolean;
  onSignOut?: () => void; // Optional, only if you want a sign out button
}

const Navbar = ({ isSignedIn, onSignOut }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/articles', name: 'Articles' },
    { path: '/blog', name: 'Blog' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo">ProfessionalSite</Link>L
          <button 
            className="mobile-menu-button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <span className="nav-auth">
            {isSignedIn ? (
              onSignOut ? (
                <button onClick={onSignOut} className="signout-btn">Sign Out</button>
              ) : (
                <span>Signed In</span>
              )
            ) : (
              <Link to="/signin" className="signin-btn">Sign In</Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;