import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, MagnetBox } from '../Components/Styled';
import homeImg from '../img/home.png';
import './WelcomeNav.scss';

const WelcomeNav = (props) => {
  return (
    <nav className="navbar">
      <li>
        <Link to="/">
          <MagnetBox>
            <Icon clickable shadow="4px 4px 4px #333" size={"50px"} src={homeImg} />
          </MagnetBox>
        </Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
}

export default WelcomeNav;
