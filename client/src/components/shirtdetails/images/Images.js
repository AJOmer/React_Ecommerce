import React, { useState } from "react";

import "./Images.css";

const Images = (props) => {
    const { images } = props;

    const [mainImage, setMainImage] = useState(images[0]);

    const changeMainImage = (image) => {
        setMainImage(image);
    };

    return ( <
        div className = "image-wrapper" >
        <
        div className = "mainrow" >
        <
        img src = { mainImage }
        alt = "mainshirt" / >
        <
        /div>{" "} <
        div className = "alt-images" >
        <
        div className = "secondrow" > { " " } {
            images.map((shirtImage, index) => ( <
                div key = { index }
                className = "alternativepics"
                onClick = {
                    () => changeMainImage(shirtImage) } >
                <
                img src = { shirtImage }
                alt = "small_alts" / >
                <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Images;