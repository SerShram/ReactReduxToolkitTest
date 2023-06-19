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
            <NavLink to='/last-todos'>Deleted todos</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;