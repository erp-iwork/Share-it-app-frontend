import React from "react";
import imageLoader from "../../assets/loader/preloader.gif";
const LoadingSpinner = () => (
  <div className="text-center" style={{ borderRadius: 5000 }}>
    <img src={imageLoader} alt="" />
  </div>
);

export default LoadingSpinner;
