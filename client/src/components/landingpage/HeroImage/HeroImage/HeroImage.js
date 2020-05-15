import React    from "react";
import template from "./HeroImage.jsx";

class HeroImage extends React.Component {
  render() {
    return template.call(this);
  }
}

export default HeroImage;
