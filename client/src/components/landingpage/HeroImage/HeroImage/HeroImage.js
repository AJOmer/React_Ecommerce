import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

const HeroImage = () => {
    const [naturalSlideHeight, setNaturalSlideHeight] = useState(0);
    const [heroImagesArray, setHeroImagesArray] = useState([]);


    const heroImagesHD = [{
            brand: "supreme",
            link: "https://www.modern-notoriety.com/wp-content/uploads/2019/10/tees.jpg",
        },
        {
            brand: "off-white",
            link: "https://www.thedropdate.com/wp-content/uploads/2017/03/OFF-WHITE-SS17-T-SHIRTS.jpg",
        },
        {
            brand: "tmc",
            link: "https://www.dhresource.com/0x0/f2/albu/g8/M01/57/8D/rBVaV1zEIOyAYRTJAAKPaB-OGxA238.jpg",
        },
    ];

    useEffect(() => {
        checkWindowWidth();
    }, []);

    const checkWindowWidth = () => {
        const windowWidth = window.innerWidth;

        switch (true) {
            case windowWidth <= 768: //iPad
                return setNaturalSlideHeight(50) & setHeroImagesArray(heroImagesHD);
            case windowWidth <= 1024: // high resolution
                return setNaturalSlideHeight(50) & setHeroImagesArray(heroImagesHD);
            default:
                return setNaturalSlideHeight(35) & setHeroImagesArray(heroImagesHD);
        }
    };

    return ( <
        CarouselProvider className = "carosoulmain"
        naturalSlideHeight = { naturalSlideHeight }
        naturalSlideWidth = { 100 }
        totalSlides = { 3 }
        isPlaying = { true }
        interval = { 5000 } >
        <
        Slider > {
            heroImagesArray.map((heroImage, ind) => { <
                Slide key = { ind }
                index = { ind } >
                    <
                    div className = "selwrapper" >
                    <
                    img src = { heroImage.link }
                /> < /
                div > <
                    /Slide>;
            })
        } <
        /Slider> <
        ButtonBack className = "buttonprevious" >
        <
        i className = "fa fa-angle-left" / >
        <
        /ButtonBack> <
        ButtonNext className = "buttonnext" >
        <
        i className = "fa fa-angle-right"
        aria - hidden = "true" / >
        <
        /ButtonNext> <
        DotGroup className = "dotgroup" / >
        <
        /CarouselProvider>
    );
};

export default HeroImage;