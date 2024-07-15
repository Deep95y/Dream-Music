import React, { useState, useEffect, useRef } from 'react';
import Card from './card';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Showcase from './showcase';
import Playlist from './playlist';
import './index.css';
import './navbar.css';
import './playlist.css';
import './showcase.css';
import './card.css';
import { Howl } from 'howler';

const App = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); 
  const [songlist, setSonglist] = useState([
    { title: "Billy Jean", play: "1,040,811,084", duration: "4:53", album: "Thriller 25 Super Deluxe Edition", sonAudioSrc: "/assets/audio/billie_jean.mp3", songImgSrc: "/assets/images/billi.png", artist: "Michael Jackson" },
    { title: "Beat it", play: "643,786,045", duration: "4:19", album: "Thriller 25 Super Deluxe Edition", sonAudioSrc: "/assets/audio/beat_It.mp3", songImgSrc: "/assets/images/billi.png", artist: "Michael Jackson" }, 
    { title: "Smooth Criminal - 2012 Remastered", play: "407,234,004", duration: "4:17", album: "Thriller 25 Super Deluxe Edition", sonAudioSrc: "/assets/audio/smooth_criminal.mp3", songImgSrc: "/assets/images/smooth.png", artist: "Michael Jackson" },
    { title: "Dont Stop 'Til You Get Enough", play: "316,391,952", duration: "5:58", album: "Bad 25th Anniversary", sonAudioSrc: "/assets/audio/dont_stop_til_you_get_enough.mp3", songImgSrc: "/assets/images/dontstop.png", artist: "Michael Jackson" },
    { title: "Rock With You - Single Version", play: "268,187,218", duration: "4:13", album: "Off the wall", sonAudioSrc: "/assets/audio/rock_with_you.mp3", songImgSrc: "/assets/images/dontstop.png", artist: "Michael Jackson" }, 
  ]);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState(0); 
  const animationFrameRef = useRef(null);



  const playSound = (index) => {
    if (sound) {
      sound.unload();
      setSound(null);
    }

    const newSound = new Howl({
      src: songlist[index].sonAudioSrc,
      onend: () => {
        setIsPlaying(false);
        nextTrack();
      }, 
      onload: () => {
        setDuration(newSound.duration());
      },
      onplay: () => {
        setIsPlaying(true);
        updateCurrentTime();
      }
    });

    setSound(newSound);
    newSound.play();
  };

  const togglePlayPause = () => {
    if (!sound) {
      playSound(currentTrackIndex);
    } else if (isPlaying) {
      sound.pause();
      setIsPlaying(false); 
      cancelAnimationFrame(animationFrameRef.current);
    } else {
      sound.play();
      setIsPlaying(true);
      updateCurrentTime();
    }  
  };

  const previousTrack = () => {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = songlist.length - 1;
    }
    setCurrentTrackIndex(newIndex);
    setClickedRowIndex(newIndex);
    setCurrentTime(0);
    playSound(newIndex);
  };

  const nextTrack = () => {
    let newIndex = (currentTrackIndex + 1) % songlist.length;
    setCurrentTrackIndex(newIndex);
    setClickedRowIndex(newIndex);
    setCurrentTime(0);
    playSound(newIndex);
  };

  const updateCurrentTime = () => {
    if (sound.playing()) {
      setCurrentTime(sound.seek());
      animationFrameRef.current = requestAnimationFrame(updateCurrentTime);
    }
  };

  const handleSliderChange = (event, value) => {
    if (sound) {
      sound.seek(value);
      setCurrentTime(value);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (sound) {
        sound.unload();
      }
    };
  }, [sound]);

  return (
<div className='layout' style={{ display: 'flex', height: '100%', flexDirection: 'row' }}>
  <div style={{ flex: '0 0 20%' }}>
    <Sidebar />
  </div>
  <div style={{ flex: '0 0 60%', display: 'flex', flexDirection: 'column' }}>
  <div style={{ flex: '0 0 10%' }}>
    <Navbar />
  </div>
  <div style={{ flex: '0 0 30%' }}>
    <Showcase />
  </div>
  <div style={{ flex: '0 0 50%' }}>
    <Playlist
      songlist={songlist}
      setCurrentTrackIndex={setCurrentTrackIndex}
      setIsPlaying={setIsPlaying}
      setSonglist={setSonglist}
      playSound={playSound}
      clickedRowIndex={clickedRowIndex}
      setClickedRowIndex={setClickedRowIndex}
      setCurrentTime={setCurrentTime}
    />
  </div>
</div>

  <div className='card-layout' style={{ flex: '0 0 20%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Card
      songlist={songlist}
      currentTrackIndex={currentTrackIndex}
      setCurrentTrackIndex={setCurrentTrackIndex}
      formatTime={formatTime}
      handleSliderChange={handleSliderChange}
      nextTrack={nextTrack}
      previousTrack={previousTrack}
      togglePlayPause={togglePlayPause}
      playSound={playSound}
      isPlaying={isPlaying}
      sound={sound}
      duration={duration}
      currentTime={currentTime}
    />
  </div>
</div>


  );
}

export default App;