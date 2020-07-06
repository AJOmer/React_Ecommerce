import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./ShirtDetails.css";

const ShirtDetails = (props) => {
    const {
        _id,
        brand,
        name,
        images,
        description,
        retail_price,
    } = props.selectedShirt;

    const { deleteShirts } = props;

    return ( <
        div className = "details-wrapper" >
        <
        div className = "shirt-info" >
        <
        h1 className = "shirt-info-brand" > { brand } < /h1>{" "} <
        p className = "shirt-info-name" > { name } < /p>{" "} <
        p className = "shirt-info-price" > { " " } <
        p className = "shirt-info-desc" > { description } < /p> retail price:{" "} <
        span className = "thisspan" > $ { retail_price } < /span>{" "} <
        /p>{" "} <
        /div>{" "} {
            props.isAdmin ? ( <
                >
                <
                button className = "shirtinfo-button btn btn-danger btn-block btn-sm"
                onClick = {
                    () => deleteShirts(_id) } >
                Delete Shirt { " " } <
                /button>{" "} <
                />
            ) : null
        } { " " } <
        /div>
    );
};

export default withRouter(ShirtDetails);