import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'shop', path: '/', label: 'Shop' },
    { name: 'mens', path: '/mens', label: 'Men' },
    { name: 'womens', path: '/womens', label: 'Women' },
    { name: 'kids', path: '/kids', label: 'Kids' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logo} alt="Zero Fashion Logo" className="logo-img" />
          <p className="desktop-only">Zero Fashion</p>
        </div>

        <div className="search-wrapper">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.name} onClick={() => {
            setMenu(item.name);
            setIsMenuOpen(false);
          }}>
            <Link to={item.path}>
              {item.label}
            </Link>
            {menu === item.name && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingCart size={20} />
            <span className="nav-cart-count">{getTotalCartItems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;