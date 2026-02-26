import { useEffect, useRef } from 'react';
import './VideoPreloader.css';
// BUG FIX: Corrected casing — file on disk is 'Animation.mp4' not 'animation.mp4'.
// Case-sensitive Linux/production builds would fail with the old import.
import preloadVideo from '../assets/Animation.mp4';

interface VideoPreloaderProps {
  // BUG FIX: Removed invalid 'any' prop from destructuring (was a syntax/type error).
  onFinish: () => void;
}

export default function VideoPreloader({ onFinish }: VideoPreloaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // BUG FIX: onFinish is now correctly wired to video end,
    // plus a fallback timer in case autoplay is blocked by the browser.
    const handleEnd = () => {
      setTimeout(onFinish, 400);
    };

    video.addEventListener('ended', handleEnd);

    // Fallback: if video doesn't play or never fires 'ended' within 7 seconds
    const fallback = setTimeout(onFinish, 7000);

    return () => {
      video.removeEventListener('ended', handleEnd);
      clearTimeout(fallback);
    };
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
