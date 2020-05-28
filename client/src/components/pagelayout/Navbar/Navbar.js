import React from "react";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = (props) => {
    return ( <
        nav className = "navbar_main" >
        <
        div className = "logo" >
        <
        h3 >
        <
        Link to = "/" > TeeTime < /Link> <
        /h3> <
        /div> <
        ul className = "nav-links" >
        <
        li >
        <
        Link to = "/products/shirts" > Shop < /Link> <
        /li> <
        li >
        <
        Link to = "/products/shirts" > New Releases < /Link> <
        /li> <
        /ul> <
        /nav>
    );
};

export default Navbar;