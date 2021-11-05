import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import { BiUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg  bg">
    <div className="container">

      <NavLink className="nav-Link logo" to="/">BookStore CMS</NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <GiHamburgerMenu />
      </button>
      <div className="collapse   navbar-collapse" id="navbarNav">
        <ul className="navbar-nav col-12">
          <li className="nav-item bdr  d-flex align-items-center">
            <NavLink className="nav-Link pt-1" to="/">BOOKS</NavLink>
          </li>
          <li className="nav-item bdr d-flex align-items-center">
            <NavLink className="nav-Link categories pt-1" to="/categories">CATEGORIES</NavLink>
          </li>
          <div className="circle d-flex justify-content-end align-items-center">
            <div className="user-h d-flex justify-content-center align-items-center">
              <BiUser className="user" />
            </div>

          </div>

        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
