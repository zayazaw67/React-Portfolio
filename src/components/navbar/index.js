import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import './navbar.css';

const Navbar = (props) => {
  return (
    <div>
      <Nav className="navbar justify-content-center">
        <NavLink classname="navlink" href="#">About</NavLink> 
        <NavLink href="#">Projects</NavLink> 
        <NavLink href="#">Placeholder</NavLink> 
      </Nav>
    </div>
  );
}

export default Navbar;