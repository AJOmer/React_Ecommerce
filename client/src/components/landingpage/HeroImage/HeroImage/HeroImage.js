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
};