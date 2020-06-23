import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import setAuthToken from "./utilities/setAuthToken";
import ShirtsForm from "./components/forms/ShirtsForm/ShirtsForm";
import ScrollToTop from "./components/TopScroll/TopScroll";
import AccountPage from "./components/pers_account/accountpage/AccountPage/AccountPage";
import HomePage from "./components/landingpage/page/HomePage";
import Navbar from "./components/pagelayout/Navbar/Navbar";
import Footer from "./components/pagelayout/Footer/Footer";
import AdminRoute from "./components/routing/AdminRoute";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

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
        />{" "} <
        section className = "container" >
        <
        Switch >
        <
        Route exact path = "/account/login"
        component = { Login }
        />{" "} <
        Route exact path = "/account/register"
        component = { Register }
        />{" "} <
        PrivateRoute exact path = "/account"
        component = { AccountPage }
        />{" "} <
        AdminRoute exact path = "/products/add/shirts"
        component = { ShirtsForm }
        />{" "} <
        /Switch>{" "} <
        /section>{" "} <
        Footer / > { " " } <
        /Fragment>{" "} <
        /Router>{" "} <
        /Provider>
    );
};

export default App;