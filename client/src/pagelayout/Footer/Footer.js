import React from "react";
import "./Footer.css";

const Footer = () => {
    return ( <
        div className = "footer-wrapper" >
        <
        div className = "footer-container" >
        <
        div className = "footer-connect" >
        <
        p className = "connect-subheader" > Connect With Us < /p>{" "} <
        div className = "newsletter-form input-group" >
        <
        input type = "text"
        placeholder = "Email Address" / >
        <
        button > subscribe < /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "footer-ourcompany" >
        <
        p className = "connect-subheader" > Company < /p>{" "} <
        ul className = "footerlist" >
        <
        li > About TeeTime < /li> <li> News </li > < li > Contact Us < /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        div className = "footer-learn" >
        <
        p className = "connect-subheader" > Learn < /p>{" "} <
        ul className = "footerlist" >
        <
        li > Apparel Sizing < /li> <li> Returns /
        Exchanges < /li>{" "} <
        li > FAQs < /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "footer-copyright" >
        <
        p > ©2020 Ahmed J.Omer < /p>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Footer;