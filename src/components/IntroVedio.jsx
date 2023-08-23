import React from "react";
import video from "../assets/MBA Chai Wala.mp4";

function IntroVedio() {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
}

export default IntroVedio;
