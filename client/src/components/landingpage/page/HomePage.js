import React, { Fragment, useEffect } from "react";

import HeroImage from "../HeroImage/HeroImage/HeroImage";
import ShirtsGrid from "../ShirtGrid/ShirtsGrid";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return ( <
        Fragment >
        <
        HeroImage / >
        <
        section className = "container" > { " " } <
        ShirtsGrid / > { " " } <
        /section>{" "} <
        /Fragment>
    );
};

export default Homepage;