import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">            
            <img src="https://images.fastcompany.net/image/upload/w_100,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="alt" />
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" exact="true" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" exact="true" to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </>
};

export default NavBar;