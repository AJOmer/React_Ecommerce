import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import setAuthToken from "./utilities/setAuthToken";
// import ShirtsForm from "./components/forms/ShirtsForm";
import ScrollToTop from "./components/TopScroll/TopScroll";
import HomePage from "./components/landingpage/page/HomePage";
import Navbar from "./components/pagelayout/Navbar/Navbar";
import Footer from "./components/pagelayout/Footer/Footer";
import AdminRoute from "./components/routing/AdminRoute";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return ( <
        Provider store = { store } >
        <
        Router >
        <
        Fragment >
        <
        ScrollToTop / >
        <
        Navbar / >
        <
        Route exact path = "/"
        component = { HomePage }
        /> <
        section className = "container" >
        <
        switch >
        <
        Route exact path = "/account/login"
        component = { Login }
        /> <
        Route exact path = "/account/register"
        component = { Register }
        /> <
        /switch> <
        /section> <
        Footer / > { " " } <
        /Fragment>{" "} <
        /Router>{" "} <
        /Provider>
    );
};

export default App;