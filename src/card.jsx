import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';
import './card.css';

const Card = ({ songlist, currentTrackIndex, setCurrentTrackIndex, formatTime, handleSliderChange, nextTrack, previousTrack, togglePlayPause, playSound, isPlaying, sound, duration, currentTime }) => {

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <Box className="card" sx={{ p: 2}}>
      <Typography variant="h6" sx={{ color: 'white', fontSize: '0.65rem' }}>Now Playing</Typography>
      <Box className="album-art" sx={{ my: 2 }}>
        <img 
          src={songlist[currentTrackIndex].songImgSrc}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          alt="Album Art"
        />
      </Box>

      <Typography variant="body1" className="music-name" sx={{ fontWeight:'bold', fontSize: '0.75rem', mt:'-2'}}>{truncateText(songlist[currentTrackIndex].title, 17)}</Typography>
      <Typography variant="body2" className="singer-name" sx={{ fontSize: '0.75rem'}}>{songlist[currentTrackIndex].artist}</Typography>
      <Box className="slider-container" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <Typography className="current-time" sx={{ fontSize: '0.6rem'}}>{formatTime(currentTime)}</Typography>
        <Slider
          min={0}
          max={duration}
          value={currentTime}
          onChange={(e, value) => handleSliderChange(e, value)}
          sx={{ color: 'white', flexGrow: 1, height:'2.5px',
            '& .MuiSlider-thumb': {
              width: 9, 
              height: 9,
              marginLeft: 0.45,
              background: 'transparent', 
              border: '2px solid #ffffff',
              borderRadius: '50%', 
            }
           }}
        />
        <Typography className="total-time" sx={{ fontSize: '0.6rem'}}>{formatTime(duration)}</Typography>
      </Box>
      <Box className="controls" sx={{ mt: 2 }}>
        <IconButton><FiRepeat size={10} className="icon" /></IconButton>
        <IconButton onClick={previousTrack}><FaStepBackward size={10} className="icon" /></IconButton>
        <Box
          sx={{
            height: '25px',
            width: '25px',
            borderRadius: '20px',
            backgroundColor: '#350808',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={togglePlayPause}
            className="play-pause-button"
          >
            {isPlaying ? <FaPause size={10} className="icon" /> : <FaPlay size={10} className="icon" />}
          </IconButton>
        </Box>
        <IconButton onClick={nextTrack}><FaStepForward size={10} className="icon" /></IconButton>
        <IconButton><FaRandom size={10} className="icon" /></IconButton>
      </Box>
    </Box>
  );
};

export default Card;
