import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, CircleUserRound, PawPrint, Award, MapPinned, HandHeart, Images, BookOpenText, Gamepad2 } from 'lucide-react';
import './style.css';

function NavBar() {
  return (
    <nav className="customNavbar ">
      <ul>
        <li>
          <NavLink to="/login" className="nav-link" activeclassname="active"><Home /></NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link" activeclassname="active"><CircleUserRound /></NavLink>
        </li>
        <li>
          <NavLink to="/adoption" className="nav-link" activeclassname="active"><PawPrint /></NavLink>
        </li>
        <li>
          <NavLink to="/badge" className="nav-link" activeclassname="active"><Award /></NavLink>
        </li>
        <li>
          <NavLink to="/edu" className="nav-link" activeclassname="active"><BookOpenText /></NavLink>
        </li>
        <li>
          <NavLink to="/map" className="nav-link" activeclassname="active"><MapPinned /></NavLink>
        </li>
        <li>
          <NavLink to="/pet-care" className="nav-link" activeclassname="active"><HandHeart /></NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className="nav-link" activeclassname="active"><Gamepad2 /></NavLink>
        </li>
        <li>
          <NavLink to="/sticker" className="nav-link" activeclassname="active"><Images /></NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
