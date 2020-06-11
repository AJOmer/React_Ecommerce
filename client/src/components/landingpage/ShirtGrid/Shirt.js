import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Shirt = ({ shirt: { _id, name, brand, images, retail_price } }) => {
    return ( <
        div className = "grid-latestrelease-column col-6 col-lg-4 col-md-4 col-sm-6" >
        <
        Link to = { `/products/shirts/${_id}` } >
        <
        div className = "shirt_image" >
        <
        img src = { images[0] }
        alt = "main_image" / >
        <
        /div>{" "} <
        div className = "shirt_info" >
        <
        p className = "shirt_brand" > { brand } < /p>{" "} <
        p className = "shirt_name" > { name } < /p>{" "} <
        p className = "shirt_price" > $ { retail_price } < /p>{" "} <
        /div>{" "} <
        /Link>{" "} <
        /div>
    );
};

Shirt.propTypes = {
    shirt: PropTypes.object.isRequired,
};

export default Shirt;