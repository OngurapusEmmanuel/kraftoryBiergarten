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

    // Play at 2x speed
    video.playbackRate = 2.0;

    const handleEnd = () => {
      setTimeout(onFinish, 400);
    };

    video.addEventListener('ended', handleEnd);

    // Fallback: halved from 7s to 3.5s since video plays 2x faster
    const fallback = setTimeout(onFinish, 3500);

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
