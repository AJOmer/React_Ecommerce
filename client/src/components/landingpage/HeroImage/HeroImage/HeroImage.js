import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./HeroImage.css";

const HeroImage = () => {
    const [naturalSlideH, setNaturalSlideH] = useState(0);
    const [heroImagesArray, setHeroImagesArray] = useState([]);

    useEffect(() => {
        const checkWindowWidth = () => {
            const windowWidth = window.innerWidth;

            const heroImages1024 = [{
                    brand: "supreme",
                    link: "https://pbs.twimg.com/media/DnY4D1QWwAAtySO.jpg",
                },
                {
                    brand: "off-white",
                    link: "https://smhttp-ssl-82554.nexcesscdn.net/pub/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/o/f/off_white_71335_1_1.jpg",
                },
                {
                    brand: "stussy",
                    link: "https://pauseonline.s3.amazonaws.com/wp-content/uploads/2015/05/stussy-summer-2015-lookbook-BAN.jpg",
                },
            ];
            const heroImages480 = [{
                    brand: "supreme",
                    link: "https://i.pinimg.com/originals/9c/bb/2e/9cbb2eba6463c3faeff2e60012fb0995.jpg",
                },
                {
                    brand: "off-white",
                    link: "https://cdn.shopify.com/s/files/1/1937/2651/products/off-white-tee-shirt_480x480.jpg",
                },
                {
                    brand: "tmc",
                    link: "https://cdn.shopify.com/s/files/1/0263/5143/5836/products/Kids-T-Shirt-Crenshaw-White-Grey-Full_1024x1024.jpg",
                },
            ];

            switch (true) {
                case windowWidth <= 480: // phone
                    return setNaturalSlideH(100) & setHeroImagesArray(heroImages480);
                case windowWidth <= 768: //ipad
                    return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
                case windowWidth <= 1024: //high resolution laptop
                    return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
                default:
                    // resolution higher than 1024, usually desktop computer
                    return setNaturalSlideH(35) & setHeroImagesArray(heroImages1024);
            }
        };
        checkWindowWidth();
    }, []);
    return ( <
        CarouselProvider className = "carouselprovider"
        naturalSlideWidth = { 100 }
        naturalSlideHeight = { naturalSlideH }
        totalSlides = { 3 }
        isPlaying = { true }
        interval = { 5000 } >
        <
        Slider > { " " } {
            heroImagesArray.map((heroImage, ind) => ( <
                Slide key = { ind }
                index = { ind } >
                <
                div className = "wrapper-men-shirt1" >
                <
                img alt = "shirts"
                src = { heroImage.link }
                /> }{" "} <
                /div>{" "} <
                /Slide>
            ))
        } { " " } <
        /Slider>{" "} <
        ButtonBack className = "buttonprevious" >
        <
        i className = "fa fa-angle-left" / >
        <
        /ButtonBack>{" "} <
        ButtonNext className = "buttonnext" >
        <
        i className = "fa fa-angle-right" / >
        <
        /ButtonNext>{" "} <
        DotGroup className = "dotgroup" / >
        <
        /CarouselProvider>
    );
};

export default HeroImage;