import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ src, classNameName, alt }) => (
  <LazyLoadImage
    src={src}
    classNameName={classNameName || ""}
    alt={alt || "jayantaDev"}
    effect="blur"
  />
);

export default MyImage;
