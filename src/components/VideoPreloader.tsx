import { useEffect, useRef } from "react";
import "./VideoPreloader.css";
import preloadVideo from "../assets/animation.mp4";

export default function VideoPreloader({ onFinish ,any }) {

  const videoRef = useRef(null);

  useEffect(() => {

    const video = videoRef.current;

    if (video) {

      video.onended = () => {

        setTimeout(() => {

          onFinish();

        }, 500);

      };

    }

  }, [onFinish]);

  return (

    <div className="video-preloader">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="preloader-video"
      >

        <source src={preloadVideo} type="video/mp4" />

      </video>

    </div>

  );

}