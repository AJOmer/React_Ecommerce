import React, { Fragment, useEffect } from "react";

import HeroImage from "../HeroImage/HeroImage/HeroImage";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return ( <
        Fragment >
        <
        HeroImage / >
        <
        section className = "container" > < /section>{" "} <
        /Fragment>
    );
};

export default Homepage;