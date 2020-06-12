import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Shirt = ({ shirt: { _id, name, brand, images, retail_price } }) => {
    return ( <
        div className = "grid-latest" >
        <
        Link to = { `/products/shirts/${_id}` } >
        <
        div className = "shirt_images" >
        <
        img src = { images[0] }
        alt = "main_image" / >
        <
        /div> <
        div className = "shirt_info" >
        <
        p className = "shirt-info-brand" > { brand } < /p> <
        p className = "shirt-info-name" > { name } < /p> <
        p className = "shirt-into-price" > $ { retail_price } < /p> <
        /div> <
        /Link> <
        /div>
    );
};

Shirt.propTypes = {
    shirt: PropTypes.object.isRequired,
};

export default Shirt;