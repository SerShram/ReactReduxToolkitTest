import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <ul className="navbar">
          <li className='navbar_item'>
            <NavLink to='/'>Home page</NavLink>
          </li>
          <li className='navbar_item'>
            <NavLink to='/archive'>Archive</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;