import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <>
        <nav className="navbar navbar-dark bg-dark">
            <NavLink exact="true" to="/">About Us</NavLink>
            <NavLink exact="true" to="/Sresult">Search</NavLink>
            <NavLink exact="true" to="/ContactUs">Contact Us</NavLink>
            <NavLink exact="true" to="/User/Varun/Bhatia">User</NavLink>
        </nav>
    </>
};

export default NavBar;