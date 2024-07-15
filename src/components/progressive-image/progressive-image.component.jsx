import { useEffect, useState } from "react";

import PlaceholderImage from "../../assets/placeholder.jpg";

import { StyledImage } from "../../styles/image/image.styles";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(PlaceholderImage);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src, placeholderSrc]);

  return (
    <StyledImage
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};
export default ProgressiveImg;
