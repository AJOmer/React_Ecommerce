import React from "react";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = (props) => {
    return ( <
        nav className = "navbar_main" >
        <
        div className = "logo" >
        <
        h3 >
        <
        Link to = "/" > TeeTime < /Link>{" "} <
        /h3>{" "} <
        /div>{" "} <
        div id = "mySidenav"
        className = "sidenav" >
        <
        Link id = "about"
        to = "/products/shirts" >
        Shop { " " } <
        /Link>{" "} <
        Link id = "home"
        to = "/" >
        Home { " " } <
        /Link>{" "} <
        Link id = "login"
        to = "/account/login" >
        Account { " " } <
        /Link>{" "} <
        /div>{" "} <
        /nav>
    );
};

export default Navbar;