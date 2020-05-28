import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import setAuthToken from "./utilities/setAuthToken";
// import ShirtsForm from "./components/forms/ShirtsForm";
import ScrollToTop from "./components/TopScroll/TopScroll";
import HomePage from "./components/landingpage/page/HomePage";
import Navbar from "./components/pagelayout/Navbar/Navbar";

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
        />{" "} <
        /Fragment>{" "} <
        /Router>{" "} <
        /Provider>
    );
};

export default App;