// Player.js
import React, { useState, useRef, useEffect } from 'react';
import '../assets/style/Player.css';
import ReactPlayer from 'react-player/lazy';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [autoplay, setAutoplay] = useState(false);
  const audioUrl = 'https://www.youtube.com/watch?v=jfKfPfyJRdk';

  const audioRef = useRef(null);

  useEffect(() => {
    const savedAutoplay = localStorage.getItem('autoplay') === 'true';
    setAutoplay(savedAutoplay);
    if (savedAutoplay) {
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current && audioRef.current.getInternalPlayer()) {
      if (isPlaying) {
        audioRef.current.seekTo(0);
        audioRef.current.getInternalPlayer().playVideo();
      } else {
        audioRef.current.getInternalPlayer().pauseVideo();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleAutoplayToggle = () => {
    const newAutoplay = !autoplay;
    setAutoplay(newAutoplay);
    if (newAutoplay) {
      localStorage.setItem('autoplay', 'true');
    } else {
      localStorage.removeItem('autoplay');
    }
  };

  return (
    <div className="player-container">
      <div className="player-controls">
        <span>Radio LoFi</span>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
        />
        <label className="autoplay-toggle">
          <input
            type="checkbox"
            checked={autoplay}
            onChange={handleAutoplayToggle}
          />
          Autoplay
        </label>
      </div>
      <ReactPlayer
        ref={audioRef}
        url={audioUrl}
        playing={isPlaying}
        volume={volume}
        controls={false}
        width="0"
        height="0"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Player;
