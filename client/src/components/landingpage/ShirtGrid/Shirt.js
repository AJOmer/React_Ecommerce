import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./ShirtsGrid.css";

const Shirt = ({
    shirt: { _id, name, brand, images, description, retail_price },
}) => {
    return ( <
        div className = "grid-latestrelease-column col-6 col-lg-4 col-md-4 col-sm-6" >
        <
        Link to = { `/products/shirts/${_id}` }
        /> <
        div className = "shirt_image" >
        <
        img alt = "My Shirts"
        src = { images[0] }
        /> <
        /div> <
        div className = "shirt_specs" >
        <
        p className = "shirt_specs_brand" > { brand } < /p>{" "} <
        p className = "shirt_specs_name" > { name } < /p>{" "} <
        p className = "shirt_specs_description" > { description } < /p>{" "} <
        p className = "shirt_specs_price" > { retail_price } < /p>{" "} <
        /div>{" "} <
        /div>
    );
};

Shirt.propTypes = {
    shirt: PropTypes.object.isRequired,
};

export default Shirt;