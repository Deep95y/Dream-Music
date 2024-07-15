import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Showcase = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '85%',
        height: '100%',
        margin: 'auto',
        position: 'relative'
      }}
    >
      <Box
        component="img"
        src="back.png"
        sx={{
          width: '100%',
          height: '75%',
          position: 'absolute',
          top: '62%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '1.375rem',
          zIndex: 1,
        }}
      /> 

      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          zIndex: 2,
          textAlign: 'left',
          width: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <FaCheckCircle style={{ color: 'lightblue', marginRight: '.3125rem' }} />
          <Typography variant="body1" style={{fontSize: '.6rem', fontWeight: '500' }}>Verified Artist</Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '1.8rem', marginTop: '3%' }}>
          Michael Jackson
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '.65rem', marginTop: '10%' }}>
          27,852,501 monthly listeners
        </Typography>
      </Box>

      <Box
        component="img"
        src="artist.png"
        sx={{
          width: '60%',
          height: '110%',
          position: 'absolute',
          top: '44%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '1.375rem',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Showcase;
